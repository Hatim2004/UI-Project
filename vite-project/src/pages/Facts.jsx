import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

export default function Facts(){
    return(
        <>
         <Typography variant="h3" mb={'2vh'} mt={'14vh'} textAlign={'center'}>
            Fun fact page
        </Typography>
        <Grid   
            container
            spacing={0}
            direction={"column"}
            alignItems={"center"}
        >
            <Button 
            variant="contained" 
            color="error"
            endIcon = {<HomeIcon />} 
            className="btn"
            href="/">
                Home
            </Button>
        </Grid>

         <Card sx={{ maxWidth: 345, marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '10vh'}}>
      <CardMedia
        sx={{ height: 140 }}
        image="../src/assets/images/cat-fact.webp"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cats
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          A house cat’s genome is 95.6 percent tiger, and they share many behaviors with their jungle ancestors, says Layla Morgan Wilde,
          a cat behavior expert and the founder of Cat Wisdom 101. 
          These behaviors include scent marking by scratching, prey play, prey stalking, pouncing, chinning, and urine marking.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://cvillecatcare.com/veterinary-topics/101-amazing-cat-facts-fun-trivia-about-your-feline-friend/">Learn More</Button>
      </CardActions>
    </Card>

        </>
    )
}