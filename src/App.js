import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/icons/Menu'


const useStyles = makeStyles ({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 10,
    borderRadius: 10,
    color: 'white',
    padding: '5px 30px'
  }
})  
  
const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: orange[400],
    }
  }
})

  function ButtonStyled() {
    const classes = useStyles()
    return <Button className={classes.root}>Test Styled Button</Button>
  }

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}

        onChange={(e) =>setChecked(e.target.checked)}
        inputprops={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label="Checkbox"
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
            <AppBar color="secondary" position="static">
              <Toolbar>
                <IconButton>
                  <Menu />
                </IconButton>
                <Typography variant="h6">
                  MUI themeing
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to a New Fit
            </Typography>
            <ButtonStyled />

            <Grid container spacing={2} justify="center">
              <Grid item xs>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
              <Grid item xs>
                <Paper style={{ height:75, width:'100%', }} />
              </Grid>
            </Grid>  

            {/* <TextField
              variant="outlined"
              color="primary"
              type="date"
              label="Pick-up date"
          
            /> */}
            <CheckboxExample />
            <ButtonGroup variant="contained" color="primary">
              <Button 
                startIcon={<SaveIcon />}>
                  Save
              </Button>
              <Button 
                startIcon={<DeleteIcon />}>
                  Discard
              </Button>
            </ButtonGroup>
            
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
