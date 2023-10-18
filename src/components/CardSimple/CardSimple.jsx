import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CardSimple = ({ heading, amount, profits, imageSrc }) => {
    return (
        <Card sx={{ display: 'flex', padding: '20px', borderRadius: '10px'}}>
          <CardMedia
            component="img"
            src={imageSrc}
            alt="Circular Image"
            sx={{ width: 150, height: 150, borderRadius: '50%' }}
          />
          <CardContent>
            <Typography variant="h7" component="div">
              {heading}
            </Typography>
            <Typography variant="h4">
              {amount}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {profits}
            </Typography>
          </CardContent>
        </Card>
      );
}

export default CardSimple