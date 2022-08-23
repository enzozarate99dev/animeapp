import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Link from 'next/link'

export default function AnimeCard({ titulo, imagen, animeId }) {


  return (
    
      
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
           
              
                <CardMedia
                  component="img"
                  height="140"
                  image={imagen}

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                  </Typography>

                </CardContent>
              
          </CardActionArea>
        </Card>
      
  );
}
