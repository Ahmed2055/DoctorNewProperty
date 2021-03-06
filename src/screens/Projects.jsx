import React, {useState} from 'react'
import './Projects.css'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import { Link } from "react-router-dom";
import capitalImg from '../pics/capitalImg.jpg';
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

    const [lang, setLang] = useState('/ar')

    const classes = useStyles();

    const resetSearch = ()=>{
      setActiveCity(null)
      setActiveArea(null)
      setActiveMap(null)
    }

    return (
        <div className='compounds'>
            {activeCity === null ? <></>:
            <div className="projectsReset"><ButtonReset variant="contained" color="primary" disableRipple className={classes.margin} onClick={()=>resetSearch()} > ?????????? ?????????? ?????????? </ButtonReset></div>  }
            {activeCity === null ?
             <div className="projectsText__Container"> <p className="projectsText__Text"> ?????????? ?????????? ???? ???? ?????????? ???? ???????? ???????????? ?????????????? ???? ???????? ???? ?????????????? </p> </div>
             :<></>}
            <img src={activeMap}  className="projectsMap"/>
            <div className="compoundCity__container">
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} className='compoundCity__button'  onClick={()=>{setActiveCity('capital')
                 setActiveMap(capitalImg)}}>?????????????? ????????????????</BootstrapButton>
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
                        setActiveMap(downTownImg)}}> ???????? ????????</ButtonArea>
                      <ButtonArea variant="contained" color="primary" disableRipple className={classes.margin}  onClick={()=>{setActiveArea('mu23')
                        setActiveMap(mu23Img)}}> Mu23</ButtonArea>
                  </div>
                </div>
                {activeArea === 'r7' ? 
                <div className="compoundCityArea__ProjectsContainer r7">
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1005`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ?????????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? Scene7 </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1006`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ?????????? </ButtonProject></Link>
                  </div>
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1002`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ???????????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >  ?????????? ?????? ???????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? 31 North  </ButtonProject></Link>
                  </div>
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ???????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >???????????? ??????  </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1000`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >  ???????????? ??????????????  ??????????   </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'r8' ? 
                <div className="compoundCityArea__ProjectsContainer r8">
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ?????????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ???????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1001`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ???????????? ???????????? 2 </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'downTown' ? 
                <div className="compoundCityArea__ProjectsContainer downTown">
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ???????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ???????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ?????????? ?????????? </ButtonProject></Link>
                  </div>
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/2001`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ????????  ??????????  </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/2000`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  >???????????????? ??????</ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                {activeArea === 'mu23' ? 
                <div className="compoundCityArea__ProjectsContainer mu23">
                  <div className="compoundProjects__container">
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ?????????? ???????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ?????? ?????????????? ???????????? </ButtonProject></Link>
                      <Link to={`${lang}/projectPage/1004`} className='drawerBox'><ButtonProject variant="contained" color="primary" disableRipple className={classes.margin}  > ??????  G3 </ButtonProject></Link>
                  </div>
                </div> 
                : <></>}
                </>
                  :   <></>  }
                
                
            </div>
            <div className="compoundCity__container">
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} className='compoundCity__button' onClick={()=>{setActiveCity('alameen')
                  setActiveMap(alameenMap)}}>?????????????? ??????????????</BootstrapButton>
            </div>
            
        </div>
    )
}

export default Projects
