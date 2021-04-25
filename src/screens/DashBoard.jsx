import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import './DashBoard.css'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);
  
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);
  
  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(2),
      textDecoration:'none'
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

function DashBoard() {

    const classes = useStyles();
    let match = useRouteMatch();

    const [activeCity, setActiveCity] = useState('capital')

    return (
        <div className='dashBoard'>
            <div className='dashBoard__departments'>
                <Link to='/' className='dashBoard__department' ><BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}  > إضافة عقار سكني </BootstrapButton> </Link>
                <Link to='/' className='dashBoard__department' ><BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}  > إضافة مكتب إداري </BootstrapButton> </Link>
                <Link to='/' className='dashBoard__department' ><BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}  > إضافة محل للتجاري </BootstrapButton> </Link>
                <Link to='/' className='dashBoard__department' ><BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}  > إضافة عيادة طبية </BootstrapButton> </Link>
                <Link to='/' className='dashBoard__department' ><BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}  > إضافة صيدلية  </BootstrapButton> </Link>
                
            </div>
        </div>
    )
}

export default DashBoard
