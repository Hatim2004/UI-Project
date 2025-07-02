import { Celebration } from '@mui/icons-material';
import '../index.css' 
import { Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Home(){
    return(
        <>
        <Typography variant="h3" mb={'2vh'} mt={'14vh'} textAlign={'center'}>
            Home Page
        </Typography>
        <Grid 
        container
        spacing={0}
        direction={"column"}
        alignItems={"center"}
        >
            <Button 
            variant='outlined' 
            color='error'
            endIcon={<AddIcon />}
            className="btn"
            href="/facts">
                Fun facts
            </Button>
            
            <IconButton onClick={()=>{
                alert('<3');
            }}>
                <FavoriteIcon color='error' fontSize='large'/>
            </IconButton>
        </Grid>
        
        
        </>
    )
}