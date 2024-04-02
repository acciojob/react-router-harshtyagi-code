
// import React from "react";
// import './../styles/App.css';
// import About from "./About";
// import Home from "./Home";
// import {Routes, Route} from "react-router-dom";
// const App = () => {
//   return (
//     <div>
        
//         <Routes>
//           <Route path="/" element ={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//         </Routes>
//     </div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Switch from "./Switch";
const App= ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="" element={<Switch />} >
                    <Route path="" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App