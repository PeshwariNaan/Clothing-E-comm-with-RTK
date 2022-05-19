import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1> THis is the shop page</h1>
}

const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<Navigation />}> 
      {/* Here we have our navigation bar and all routes underneath are children of this route */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
