import * as React from 'react';
import { Typography, Card, CardHeader, CardContent, CardMedia, CardActions, Button} from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#f44336',
        },
        secondary: {
          main: '#f44336',
        },
    },
});


export default function GalleryCard({title, description, image, link, date}) {

    const handleClick = (e) => {
        e.previousDefault()
    }
  return (
      <MuiThemeProvider theme = {theme}>
        <Card >
            <CardHeader 
            title={title}
            subheader={date}
            style={{color: "darkblue"}}/>
            <CardMedia 
            component="img"
            height="140"
            image = {image} 
            alt = 'coding Project'/>
            <CardContent height="400">
                <Typography variant="body2" component="h3">
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent: 'center'}}>
                <Button size="small" variant="contained" onClick = {handleClick}><a href={link}>Visit Site</a></Button>
            </CardActions>
        </Card>
      </MuiThemeProvider>

  );
}
