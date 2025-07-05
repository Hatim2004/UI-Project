import { Celebration } from '@mui/icons-material';
import '../index.css' 
import { Button, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

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
            <Link to={'/facts'}>
                <Button 
                variant='outlined' 
                color='error'
                endIcon={<FavoriteIcon/>}
                className="btn">
                    Cats Fun facts 
                </Button>
            </Link>
        </Grid>
        
        
        </>
    )
}