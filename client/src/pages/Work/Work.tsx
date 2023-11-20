import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import "../../main.css"

const Work = () => { 
    return (
        <div className="container">
          <NavBar />
          <Outlet />
        </div>
      )
}

export default Work; 