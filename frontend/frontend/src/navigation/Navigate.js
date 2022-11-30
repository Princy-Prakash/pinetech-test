import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import FormSuccess from "../authentication/formSuccess";
import Login from "../authentication/login/Login";
import Signup from "../authentication/signup/Signup";
import Header from "../components/header/Header";
import VerticalTabs from "../components/tabpanel/TabPanel";
 

export default function Navigatee(){
    return( 
        <Router>
             <div>
            
            <Routes>
                <Route exact path="/vertical" element={<VerticalTabs/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/" element={<Signup/>}></Route> 
            </Routes>
            </div>
        </Router>
       
    )
} 