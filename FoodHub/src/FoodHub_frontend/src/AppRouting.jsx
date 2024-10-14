import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicHeader from "./components/PublicHeader";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicListing from "./pages/PublicListing";

const App = () => {


  return(
    <>
      <BrowserRouter>
        <PublicHeader/>
        <Routes>
          <Route path="/" index element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/listing" element={<PublicListing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

}

export default App;