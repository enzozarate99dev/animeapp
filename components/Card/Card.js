import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid'
import Link from 'next/link'

export default function AnimeCard({ titulo, imagen, animeId, rating }) {


  return (
    
      
        <Card sx={{ maxWidth: 345, backgroundColor:'#7D1935', height: 400  }}>
          <CardActionArea>
           
              
                <CardMedia 
                
                  component="img"
                  height="240"
                  image={imagen}

                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" color="white">
                    {titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Categoría: {rating}
        </Typography>
                </CardContent>
              
          </CardActionArea>
        </Card>
      
  );
}
