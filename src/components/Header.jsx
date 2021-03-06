import React, { useState} from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import logo from '../store/doctorLogo.png'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import StoreIcon from '@material-ui/icons/Store';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ApartmentIcon from '@material-ui/icons/Apartment';
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';


const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      position:'absolute',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));

function Header() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = useState('/ar')
  

  const handleDrawerOpen = () => { setOpen(true); };
  const handleDrawerClose = () => { setOpen(false);};

    return (
        <div className='header'>
            
            <IconButton color="inherit" aria-label="open drawer"  edge="end" onClick={handleDrawerOpen} className={clsx(open && classes.hide)}  >
            <MenuIcon className='headerMenu' fontSize='large'/>
            </IconButton>
            <div className={classes.root}>
                <Drawer className={classes.drawer} variant="persistent"  anchor="right"  open={open}  classes={{ paper: classes.drawerPaper, }} >
                    <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}> <ChevronRightIcon /> </IconButton>
                    </div>
                    <Divider />
                    <List dir="ltr">
                      <Link to={`${lang}/`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon> <HomeIcon />  </ListItemIcon>
                            <ListItemText className='listItemText' primary='???????????? ????????????????' />
                          </ListItem>
                      </Link>
                    </List>
                    <Divider />
                    <List dir="ltr">
                      <Link to={`${lang}/projects`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon>  <EmojiTransportationIcon /> </ListItemIcon>
                            <ListItemText className='listItemText' primary='???????????? ????????????????' />
                          </ListItem>
                      </Link>
                    </List>
                    <Divider />
                    <List dir="ltr">
                        <Link to={`${lang}/residential`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon>  <span className="material-icons">villa</span></ListItemIcon>
                            <ListItemText className='listItemText' primary='???????????? ??????????' />
                          </ListItem>
                        </Link>
                        <Link to={`${lang}/administrative`} className='drawerBox'>
                          <ListItem button className='listItem' >
                              <ListItemIcon> <BusinessIcon /></ListItemIcon>
                              <ListItemText className='listItemText' primary='?????????? ????????????' />
                          </ListItem>
                        </Link>
                        <Link to={`${lang}/commercial`} className='drawerBox'>
                          <ListItem button className='listItem' >
                              <ListItemIcon> <StoreIcon /></ListItemIcon>
                              <ListItemText className='listItemText' primary='?????????? ????????????' />
                          </ListItem>
                        </Link>
                        <Link to={`${lang}/clinics`} className='drawerBox'>
                          <ListItem button className='listItem' >
                              <ListItemIcon> <LocalHospitalIcon /></ListItemIcon>
                              <ListItemText className='listItemText' primary='???????????? ????????' />
                          </ListItem>
                        </Link>
                        <Link to={`${lang}/pharmacies`} className='drawerBox'>
                          <ListItem button className='listItem' >
                              <ListItemIcon> <LocalPharmacyIcon /></ListItemIcon>
                              <ListItemText className='listItemText' primary='??????????????' />
                          </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <List dir="ltr">
                      <Link to={`${lang}/questions`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon> <ContactSupportIcon />  </ListItemIcon>
                            <ListItemText className='listItemText' primary='?????????????? ???????????? ??????????' />
                          </ListItem>
                      </Link>
                    </List>
                    <Divider />
                    <List dir="ltr">
                      <Link to={`${lang}/conditions`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon> <span className="material-icons">format_list_numbered_rtl</span>  </ListItemIcon>
                            <ListItemText className='listItemText' primary='???????????? ?? ??????????????' />
                          </ListItem>
                      </Link>
                    </List>
                    <Divider />
                    <List dir="ltr">
                      <Link to={`${lang}/contact`} className='drawerBox'>
                          <ListItem button className='listItem' classes={{}} >
                            <ListItemIcon> <span className="material-icons">chat</span>  </ListItemIcon>
                            <ListItemText className='listItemText' primary='???????? ??????' />
                          </ListItem>
                      </Link>
                    </List>
                    <Divider />
                </Drawer>
            </div>
            
            <Link to={`${lang}/`} ><img className='headerLogo' src={logo} alt='logo' ></img></Link>
            
            <div className='headerContact' >
                <PhoneEnabledIcon className='headerContact_icon' fontSize='default' />
                <Link to={`${lang}/`} className='headerContact_number' > 0100876702 </Link>
            </div>
        </div>
    )
}

export default Header
