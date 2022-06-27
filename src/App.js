import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import CheckOut from './routes/check-out/check-out.component';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import { setCurrentUser } from './features/user/userSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });
    return unsubscribe; //THis is a clean-up function that removes the listener - still a bit confusing. It must remove previously
    //created listeners, they will continue to stack creating a data leak and we dont want that do we...
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* Here we have our navigation bar and all routes underneath are children of this route '/' */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
