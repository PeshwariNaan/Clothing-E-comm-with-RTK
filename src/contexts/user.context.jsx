import { createContext, useState, useEffect, useReducer } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const userReducer = (state, action) => {
  const {type, payload } = action

  switch(type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
      default:
        throw new Error('Unhandled type in the user reducer')
  }
}

const INITIAL_STATE = {
  currentUser: null,
}



// this is the provider which is the actual component - this is a wrapper that will wrap the components that we want to access
export const UserProvider = ({ children }) => {

  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const { currentUser } = state
  console.log(currentUser)

  const setCurrentUser = (user) => {
    dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
  }

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        if(user) {
            createUserDocumentFromAuth(user);
        }
      
      setCurrentUser(user)
    });
    return unsubscribe; //THis is a clean-up function that removes the listener - still a bit confusing. It must remove previously
    //created listeners, they will continue to stack creating a data leak and we dont want that do we...
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// IMPORTANT - remember that any component that is hooked into the context will run. Even if the jsx is not changed (component doesn't rerender),
// all the code up until the return will run again which can cause performance issues if we have tons of components
// that are hooked into the useContext hook - be careful. This is why we centralize the code through the auth listener.
