import React, {useState, useEffect} from 'react';
import {Box, Button, Container,Grid, TextField} from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import {useDispatch} from 'react-redux';
import {createPost} from '../api/index.js';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.54)',
      disabled: 'rgba(255,255,255,0.38)',
      hint: 'rgba(255,255,255,0.38)',
    },
  },
});

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: '', 
}

const Contacts = () => {
  const [message, setMessage] = useState(initialForm);
  const [helperMessage, setHelperMessage] = useState(''); 
  const [disableButton, setDisableButton] = useState(0);
  
  const handleMessage = (e) => {
    e.preventDefault();
    const tempMessage = {...message};
    tempMessage[e.target.name] = e.target.value
    setMessage(tempMessage);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!(/.+@.+\.[A-Za-z]+$/.test(message['email']))){
      setHelperMessage('Please enter a valid email ')
      return
    }
    setHelperMessage('')
    createPost(message);
    setMessage(initialForm);
  }

  useEffect(() => {
    handleDisable();
  }, [message])

  const handleDisable = () => {
    if(!message['firstName']||!message['lastName']||!message['email']|| !message['message']){
  
      setDisableButton(1)
    }else{
      setDisableButton(0)
    }
    return 
  }  


    return(

      <ThemeProvider theme = {theme}>
            <div className = ' contact margin' style={{ background: 'skyblue', paddingTop:'5rem'}}>
              <Container>
                <h1 className = 'title-header-white' >Contact Form </h1>
                <Box component="form" sx={{ mt: 3 }} style = {{marginTop: '4rem'}}>
                  <Grid container spacing={7} >
                    <Grid item xs={12} sm={6} >
                      <TextField style={{color: 'white'}}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        value = {message['firstName']}
                        autoFocus
                        onChange ={handleMessage}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        value = {message['lastName']}
                        name="lastName"
                        autoComplete="family-name"
                        onChange ={handleMessage}
                      />
                    </Grid>
                    <Grid item xs={12} align = "center">
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        value = {message['email']}
                        name="email"
                        autoComplete="email"
                        onChange ={handleMessage}
                      />
                    </Grid>
                  </Grid>
                  <br/>
                  <TextField      
                      required              
                      fullWidth 
                      id="outlined-multiline-flexible"
                      label="Multiline"
                      value = {message['message']}
                      variant="outlined"
                      name = "message"
                      multiline
                      rows={16}
                      style={{Align:'right'}}
                      helperText="Please enter your message here"  
                      onChange ={handleMessage}          
                  />
                  <Button
                  type="submit"
                  style={{maxWidth: '120rem', float: 'right'}}
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick = {handleSubmit}
                  disabled = {disableButton}
                  >
                  Sent Message
                  </Button>
                </Box>
                <h3>{helperMessage}</h3>
              </Container>
            </div>  
      </ThemeProvider>

    )

};


export default Contacts;