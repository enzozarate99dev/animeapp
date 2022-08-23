import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
const MyHome = () => {
    return(
        <Grid container 
        sx={{
            padding: 10,
            
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Grid item xs={12} lg={6}>
            <Typography variant="h2" component="div" color="white">
                AnimesFlix
            </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Typography variant="h5" component="div" color="white">
            Disfruta de un catálogo de cientos de animes y simulcasts subtitulados profesionalmente.
            </Typography>
            </Grid>
        </Grid>
    )
}
export default MyHome