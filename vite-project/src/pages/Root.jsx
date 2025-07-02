import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";

const Root = () =>{
    return(
        <div>
            <AppBar/>
            <Outlet/>
        </div>
    )
}

export default Root;