import { createContext, useState } from "react";


//as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

// this is the provider which is the actual component - this is a wrapper that will wrap the components that we want to access
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}
    return <UserContext.Provider value={value} >{children}</UserContext.Provider>
}