import React, {useState} from 'react'
import './Projects.css'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import capitalImg from '../pics/capitalImg.png';
import r7Img from '../pics/r7Img.png';
import r8Img from '../pics/r8Img.png';
import downTownImg from '../pics/downTownImg.png';
import mu23Img from '../pics/mu23Img.png';
import alameenMap from '../store/alameenMap.png';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'blue',
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
        backgroundColor: '#090775',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#9ee5ff',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.3rem rgba(255,255,255,.5)',
      },
    },
  })(Button);

  const ButtonArea = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 15,
      padding: '4px 8px',
      display: 'block',
      margin:'auto',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'orange',
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
        backgroundColor: '#090775',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#9ee5ff',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.3rem rgba(255,255,0,.5)',
      },
    },
  })(Button);

  const ButtonProject = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 13,
      padding: '4px 6px',
      display: 'block',
      margin:'auto',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'yellow',
      borderColor: '#0063cc',
      color:'black',
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
        backgroundColor: '#090775',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color:'white',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#9ee5ff',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.3rem rgba(255,150,0,.5)',
      },
    },
  })(Button);

  const ButtonReset = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 13,
      padding: '4px 6px',
      display: 'block',
      margin:'auto',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: 'red',
      borderColor: '#0063cc',
      color:'white',
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
        backgroundColor: '#090775',
        borderColor: '#0062cc',
        boxShadow: 'none',
        color:'white',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#9ee5ff',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.3rem rgba(255,150,0,.5)',
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
      margin: theme.spacing(1),
    },
  }));
  
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

function Projects() {

    const [activeCity, setActiveCity] = useState(null)
    const [activeArea, setActiveArea] = useState(null)
    const [activeMap, setActiveMap] = useState(null)


    const classes = useStyles();

    const resetSearch = ()=>{
      setActiveCity(null)
      setActiveArea(null)
      setActiveMap(null)
    }

    return (
        <div className='compounds'>
            {activeCity === null ? <></>:
            <div className="projectsReset"><ButtonReset variant="contained" color="primary" disableRipple className={classes.margin} onClick={()=>resetSearch()} > تصفير نتائج البحث </ButtonReset></div>  }
            {activeCity === null ?
             <div className="projectsText__Container"> <p className="projectsText__Text"> يمكنك البحث عن أي مشروع عن طريق إختيار المدينة ثم الحي ثم المشروع </p> </div>
             :<></>}
            <img src={activeMap}  className="projectsMap"/>
            <div className="compoundCity__container">
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} className='compoundCity__button'  onClick={()=>{setActiveCity('capital')
                 setActiveMap(capitalImg)}}>العاصمة الإدارية</BootstrapButton>
                {activeCity === 'capital'? 
                <>
                <div className="compoundCityArea__AreasContainer">
                  <div className="compoundCity__areaContainer">
                      <ButtonArea variant="contained" color="primary" disableRipple className={classes.margin}  onClick={()=>{setActiveArea('r7')
                        setActiveMap(r7Img)}}> R7</ButtonArea>
                  </div>
                  <div className="compoundCity__areaContainer">
                      <ButtonArea variant="contained" color="primary" disableRipple className={classes.margin}  onClick={()=>{setActiveArea('r8')
                        setActiveMap(r8Img)}} > R8</ButtonArea>
                      <ButtonArea variant="contained" color="primary" disableRipple className={classes.margin}  onClick={()=>{setActiveArea('downTown')
                        setActiveMap(downTownImg)}}> داون تاون</ButtonArea>
                      <ButtonArea variant="contained" color="primary" disableRipple className={classes.margin}  onClick={()=>{setActiveArea('mu23')
                        setActiveMap(mu23Img)}}> Mu23</ButtonArea>
                  </div>
                </div>
                {activeArea === 'r7' ? 
                <div className="compoundCityArea__ProjectsContainer r7">
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند أرمونيا </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند Scene7 </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند أتيكا </ButtonProject></Link>
                  </div>
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند بوتانيكا </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >  ستريب مول ديجويا </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > برج 31 North  </ButtonProject></Link>
                  </div>
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند العتال </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >ديجويا مول  </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > برج 31 North  </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'r8' ? 
                <div className="compoundCityArea__ProjectsContainer r8">
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند لافيدي </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند روزس </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > كمبوند ديجويا </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'downTown' ? 
                <div className="compoundCityArea__ProjectsContainer downTown">
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول اسجارد </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول انيزيا </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول فينشي ستريت </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'mu23' ? 
                <div className="compoundCityArea__ProjectsContainer mu23">
                  <div className="compoundProjects__container">
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول باريس ايست </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول العاصمة الطبية </ButtonProject></Link>
                      <Link to="/projectPage" className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > مول  G3 </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                </>
                  :   <></>  }
                
                
            </div>
            <div className="compoundCity__container">
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} className='compoundCity__button' onClick={()=>{setActiveCity('alameen')
                  setActiveMap(alameenMap)}}>العلمين الجديدة</BootstrapButton>
            </div>
            
        </div>
    )
}

export default Projects
