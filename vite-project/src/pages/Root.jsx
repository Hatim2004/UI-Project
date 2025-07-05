import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import { useState } from "react";
import { Button } from "@mui/material";




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
                <Button onClick={()=>{myMode == "light" ? setmyMode("dark"): setmyMode("light")}} 
                style={{marginTop: '10vh'}}>hi</Button>
                <Outlet/>
                
            </ThemeProvider>
            
        </div>
    )
}

export default Root;