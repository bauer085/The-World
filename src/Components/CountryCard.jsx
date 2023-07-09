import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function CountryCard({ name, capital, population, flagUrl }) {
    return (
        <Card sx={{ maxWidth: 345, width: 200 }}>
            <CardMedia
                component="img"
                height={140}
                image={flagUrl}
                title={name}
                alt={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {capital} | {population}
                </Typography>
            </CardContent>
        </Card>
    );
}