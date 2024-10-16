import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicListing from "./pages/PublicListing";
import { useState } from "react";
import AuthRoute from "./components/AuthRoute";
import Profile from "./pages/Profile";
import MyListing from "./pages/MyListing";
import AppSample from "./App (Sample)";

const App = () => {

  const [authenticated, setAuthenticated] = useState(true);

  const setAuth = (auth) => {
    setAuthenticated(auth);
  }

  return(
    <>
      <BrowserRouter>
        <Header isAuthenticated={authenticated}/>
        <Routes>
          <Route path="/sample" element={<AppSample/>}/>
          <Route path="/" index element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/listing" element={<PublicListing/>}/>
          <Route path="/profile" element={<AuthRoute isAuthenticated={authenticated} component={<Profile/>}/>}/>
          <Route path="/my-listing" element={<AuthRoute isAuthenticated={authenticated} component={<MyListing/>}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;