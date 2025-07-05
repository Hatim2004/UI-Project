import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useState } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';



const Root = () =>{
    const [myMode, setmyMode] = useState("light");
    const darkTheme = createTheme({
        palette:{
            // @ts-ignore
            mode: myMode
        },
    });

    return(
        <div>
            <ThemeProvider theme={darkTheme}>
                <AppBar/>
                <IconButton  onClick={()=>{myMode == "light" ? setmyMode("dark"): setmyMode("light")}} 
                style={{marginTop: '10vh'}}><Brightness4Icon /></IconButton>
                <Outlet/>
                
            </ThemeProvider>
            
        </div>
    )
}

export default Root;