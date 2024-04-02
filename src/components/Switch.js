import React from "react";
import { Link, Outlet } from "react-router-dom";
const Switch= ()=>{
    return(
        <ul>
            <li><Link to={""} >Home</Link></li>
            <li><Link to={"/about"} >About</Link></li>
            <Outlet />
        </ul>
    )
}
export default Switch