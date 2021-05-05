import React, {useState,useEffect} from 'react'
import './Property.css'
import { Link } from "react-router-dom";
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';

function Property({property, type}) {
    
    const [lang, setLang] = useState('/ar')

    return (
        <div className='property'> 
            <Link to={`${lang}/propertyPage/${type}/${property.id}`} className='propertyLink' >
                <>
                <div className='propertyPicDiv' style ={ { backgroundImage: `url(${property.picUrl})` } } >
                    <div className='picCountDiv'>
                        <span className="picCount">{property.picCount}</span>
                        <CameraAltIcon className='picCount__icon' htmlColor='rgb(255,255,255)' fontSize='small'/>
                    </div>
                </div>
                <div className='propertyDetails'>
                    <h5 className="propertyDescription">{property.description}</h5>
                    <div className="propertyPayment" dir='ltr' >
                        <span className="propertyCurrency" >   جنيه مصري  </span>
                        <span className="propertyPrice" >   {property.price.toLocaleString()} </span>
                    </div>
                    <div className="propertyMoreDetails">
                        <span className="propertyType">{property.propertyType}</span>
                        <span className="propertyCity" > {property.city} </span>
                        <span className="roomCount">{property.roomCount}</span>
                        {property.roomCount? <SingleBedIcon fontSize='small' className='propertyDetails__icon bedrooms' /> : <></> }
                        
                        <span className="bathRoomCount">{property.bathroomCount}</span>
                        {property.bathroomCount? <BathtubIcon fontSize='small' className='propertyDetails__icon bathrooms' /> : <></> }
                        
                        <p className="propertySpaceCount"> <span className='propertySpaceText' >{property.space}  متر مربع </span></p>
                        
                    </div>
                </div>
                </>
            </Link>
        </div>
    )
}

export default Property


/*

<img className='propertyPic' src='https://www.propertyfinder.eg/property/1615496830/500/356/MODE/51e97a/1694632-cfb77o.webp?ctr=eg' />

*/