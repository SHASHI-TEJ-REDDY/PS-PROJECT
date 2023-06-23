// import logo from './logo.svg';
import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Support from "./components/support";
import Report from "./components/report_a_bug";
import Labeler from "./components/labeler";
import Request from "./components/Request_patch"
import Register from "./components/register_patch";
import Verify from "./components/verfiy";
import Deploy from "./components/deploy";
// import AdminTrackingDetails from "./components/home2";
import Login from "./components/login";
import Login1 from "./components/login1";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <>
          <h1>Welcome</h1>
        </>
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/home2" element={<AdminTrackingDetails />} /> */}
          <Route path="/Report" element={<Report />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Labeler" element={<Labeler />} />
          <Route path="/Request" element={<Request />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/Deploy" element={<Deploy />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          
        </Routes>
      </Router>
    </>
  );

}

export default App;
