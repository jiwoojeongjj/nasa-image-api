import React from 'react';
import LikeButton from './LikeButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

function Content(props) {
    console.log(props)
    console.log(props.response.url, props.response.title, props.response.date);
    return (
    <Card sx={{ maxWidth: 400 }}>
        <CardMedia
            component="img"
            image={props.response.url}
            alt="astronomy picture of the day from NASA"
        />
        <CardContent>
            <Typography variant="h6" component="div">
                {props.response.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.response.date}
            </Typography>
        </CardContent>
        <CardActions>
            <LikeButton/>
        </CardActions>
    </Card>
    );
}

export default Content;
