import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";

import "../../main.css"
import ProjectCardDisplay from "./ProjectCardDisplay";

const Work = () => { 
    return (
        <div className="container">
          <NavBar />
          <Outlet />
        </div>
      )
}

export default Work; 