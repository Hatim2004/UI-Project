import '../index.css'
import { Button, Grid, TextField, Typography } from "@mui/material";


export default function Home() {
    return (
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
                <TextField label='Iteam'>

                </TextField>
                <TextField  label='Price' sx={{ mt: '2em' }}>

                </TextField>

                <Button variant='contained' sx={{ mt: '2em' }}>Sumbit</Button>
            </Grid>
        </>
    )
}