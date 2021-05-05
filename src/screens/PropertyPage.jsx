import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import './PropertyPage.css'
import {residentialData} from '../store/propertyData.jsx'
import {commercialData} from '../store/propertyData.jsx'
import {clinicData} from '../store/propertyData.jsx'
import {administrativeData} from '../store/propertyData.jsx'
import {pharmaciesData} from '../store/propertyData.jsx'
import mapImage from '../pics/mapImage.png';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import Brightness1Icon from '@material-ui/icons/Brightness1';


function PropertyPage() {

    const [activePic, setActivePic] = useState(0)
    const [currentPropId, setCurrentPropId] = useState('')
    const [currentPropType, setCurrentPropType] = useState('')
    const [currentProperty, setCurrentProperty] = useState(null)
    const [showRoomCount, setShowRoomCount] = useState(false)
    const [showBathRoomCount, setShowBathRoomCount] = useState(false)

    const [lang, setLang] = useState('/ar')


    let history = useHistory();

    useEffect  (() => {
        const propType = history.location.pathname.slice(17,22)
        const propId = history.location.pathname.slice(23)
        
        setCurrentPropType(propType)
        
        setCurrentPropId(propId)

        if(propType == 'resid'){
            
            
            for(let i = 0 ; residentialData.length ; i++ ){
                
                 if(residentialData[i].id  == propId ){
                    setCurrentProperty(residentialData[i])
                    
                    break ;
                } 
            }
        }
        
        else if(propType === 'admin'){ 
        for(let i = 0 ; administrativeData.length ; i++ ){
            console.log(administrativeData)
             if(administrativeData[i].id  == propId ){
                setCurrentProperty(administrativeData[i])
                
                break ;
            } 
        }}
        else if(propType === 'comme'){ 
        for(let i = 0 ; commercialData.length ; i++ ){
            console.log(commercialData)
             if(commercialData[i].id  == propId ){
                setCurrentProperty(commercialData[i])
                
                break ;
            } 
        }}
        else if(propType === 'clini'){ 
        for(let i = 0 ; clinicData.length ; i++ ){
            console.log(clinicData)
             if(clinicData[i].id  == propId ){
                setCurrentProperty(clinicData[i])
                
                break ;
            } 
        }}
        else if(propType === 'pharm'){ 
        for(let i = 0 ; pharmaciesData.length ; i++ ){
            console.log(pharmaciesData)
             if(pharmaciesData[i].id  == propId ){
                setCurrentProperty(pharmaciesData[i])
                
                break ;
            } 
        }}
        else{}

        
        
    },[history] )

    useEffect(() => {

        if(currentProperty !== null  &&  currentProperty.roomCount !== undefined){setShowRoomCount(true)}
        if(currentProperty !== null  &&  currentProperty.bathroomCount !== undefined){setShowBathRoomCount(true)}
      
    }, [currentProperty])

    const goRightPic = ()=>{
        if(activePic != currentProperty.pics.length-1){
            setActivePic(activePic+1)
        }
    }
    const goLeftPic = ()=>{
        if(activePic != 0){
            setActivePic(activePic-1)
        }
    }
    return (
        <div className='propertyPage'>
            <div className="propertyPageContainer">
                <div className="propertyPics" >
                    <button className='propertyPics__changerRight' onClick={()=>goRightPic()}  > <ArrowForwardIosIcon fontSize='small' /> </button>
                    <img className="propertyPic" src={currentProperty === null?  'data not available' : currentProperty.pics[activePic]}  />
                    <button className='propertyPics__changerLeft' onClick={()=>goLeftPic()} > <ArrowBackIosIcon fontSize='small'/> </button>
                </div>
                <div className="proprtyPics__counterContainer" dir='ltr'>{currentProperty === null?  'data not available' : currentProperty.pics.map((image,index)=>(<Brightness1Icon key={index} className={activePic === index? 'proprtyPics__counterIconActive': 'proprtyPics__counterIcon'} fontSize='small'  />))}</div>

                <div className="propertyDetails__page">
                    <h2 className="propertyDetails__title">{currentProperty === null?  'data not available' : currentProperty.description}</h2>
                    <div className="propertyDetails__mainSpecs">
                        <HomeWorkIcon className='propertyDetails__typeIcon' />
                        <span className="propertyDetails__type">نوع العقار:</span>
                        <span className="propertyDetails__typeText"> {currentProperty === null?  'data not available' : currentProperty.propertyType}  </span>
                    </div>
                    <div className="propertyDetails__mainSpecs">
                        <AspectRatioIcon className='propertyDetails__typeIcon' />
                        <span className="propertyDetails__type">مساحة العقار:</span>
                        <span className="propertyDetails__typeText"> {currentProperty === null?  'data not available' : currentProperty.space} متر مربع </span>
                    </div>
                    
                    { showRoomCount ? 
                    <div className="propertyDetails__mainSpecs">
                        <SingleBedIcon className='propertyDetails__typeIcon' />
                        <span className="propertyDetails__type">عدد الغرف:</span>
                        <span className="propertyDetails__typeText"> {residentialData[2].roomCount} غرف </span>
                    </div>
                    :  <></>  }
                    { showBathRoomCount ? 
                    <div className="propertyDetails__mainSpecs">
                        <BathtubIcon className='propertyDetails__typeIcon' />
                        <span className="propertyDetails__type">عدد الحمامات :</span>
                        <span className="propertyDetails__typeText"> {residentialData[2].bathroomCount} حمام </span>
                    </div>
                    :  <></>  }
                    
                </div>

                <div className="propertyDetails__page">
                    <h2 className="propertyDetails__title">تفاصيل الوحدة</h2>
                    <div className="propertyDetails__text">{currentProperty === null?  'data not available' : currentProperty.details.split("\n").map((i,key) => { return <p key={key} className="propertyDetails__textLine">{i}</p>;  })}</div>
                </div>

                <div className="propertyDetails__page">
                    <h2 className="propertyDetails__title">الموقع</h2>
                    <a href={residentialData[2].location} className="propertyLocation__link">
                        <img src={mapImage} alt="Map Image" className="propertyLocation__pic"/>
                        <p className="propertyLocation__address">{currentProperty === null?  'data not available' : currentProperty.address}</p>
                    </a>
                </div>

                <div className="propertyDetails__page">
                    <h2 className="propertyDetails__title">مزايا الوحدة </h2>
                    <div className="f">{currentProperty === null?  'data not available' : currentProperty.advantages.split("\n").map((i,key) => 
                        (<div key={key} className="propertyDetails__textLine">
                            <DoneAllIcon className='propertyDetails__typeIcon' />
                            <span  className="propertyDetails__advantage">{i}</span>
                        </div>) )}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PropertyPage;

