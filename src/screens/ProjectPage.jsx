import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router-dom";
import './ProjectPage.css'
import './Home.css'
import { Link } from "react-router-dom";
import { firebase } from '../store/config'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {residentialData} from '../store/propertyData.jsx'
import {projects} from '../store/projectsData.jsx'
import mapImage from '../pics/mapImage.png';
import noPhotoAvailable from '../pics/noPhotoAvailable.jfif';

function ProjectPage() {

    const [activePic, setActivePic] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [message, setMessage] = useState('')

    let history = useHistory();

    const [currentProjectId, setCurrentProjectId] = useState('')
    const [currentProject, setCurrentProject] = useState(null)

   const handleMessage = (e)=>{
    e.preventDefault();
    const mid = Math.floor(Math.random() * 1000000).toString()
    const messageDetails = {id:mid,name,email,contactNumber,message, time: new Date() }
    
    firebase.firestore().collection('messages').doc(mid).set(messageDetails).then(()=>{console.log(messageDetails)}).then(()=>{alert('Message has been Sent, Thank you')})
              .catch((error) => {
                  alert(error)
              });
    

    console.log(messageDetails);
    setName('')
    setEmail('')
    setContactNumber('')
    setMessage('')
   }

   const goRightPic = ()=>{
    if(activePic != currentProject.pics.length-1){
        setActivePic(activePic+1)
        }
    }
    const goLeftPic = ()=>{
        if(activePic != 0){
            setActivePic(activePic-1)
        }
    }

    useEffect(() => {
        const projectId = history.location.pathname.slice(16)
        setCurrentProjectId(projectId)
        console.log(projectId)
        for(let i = 0 ; projects.length ; i++ ){
            if(projects[i].id  == projectId ){
                setCurrentProject(projects[i])
                break ;
            }
        }
    }, [history])

    return (
        <div className='projectPage'>
            <div className="projectPage__nameContainer">
                <h2 className="projectPage__name">  {currentProject === null?  '' :currentProject.detailedName} </h2>
                <p className="projectPage__nameDate">  {currentProject === null?  '' :currentProject.dateUpdated} </p>
            </div>
            
            {projects[0].pics === null?  <></> :
            <div className="projectPage__imagesContainer">
                <div className="propertyPics" >
                    <button className='propertyPics__changerRight' onClick={()=>goRightPic()}  > <ArrowForwardIosIcon fontSize='small' /> </button>
                    <img className="propertyPic projectPic" src={currentProject === null?  noPhotoAvailable :currentProject.pics[activePic]}  />
                    <button className='propertyPics__changerLeft' onClick={()=>goLeftPic()} > <ArrowBackIosIcon fontSize='small'/> </button>
                    {/*<button className='propertyPics__changerLeft' onClick={()=>console.log(currentProject)} > <ArrowBackIosIcon fontSize='small'/> </button>*/}
                </div>
                <div className="proprtyPics__counterContainer" dir='ltr'>{currentProject === null?  '' :currentProject.pics.map((image,index)=>(<Brightness1Icon key={index} className={activePic === index? 'proprtyPics__counterIconActive': 'proprtyPics__counterIcon'} fontSize='small'  />))}</div>
            </div> }
            
            <div className="projectPage__contentsContainer">
                <h3 className="projectPage__contentTitle">?????????? ??????????????</h3>
                <ol className="projectPage__content">
                    <a className='projectPage__contentLink' href="#projectLocationDep"><li className="projectPage__contentText">???????? {currentProject === null?  '' :currentProject.longerName}  </li></a>
                    <a className='projectPage__contentLink' href="#projectSpaceDep"><li className="projectPage__contentText">?????????? {currentProject === null?  '' :currentProject.longerName} </li></a>
                    <a className='projectPage__contentLink' href="#projectServicesDep"><li className="projectPage__contentText">?????????? {currentProject === null?  '' :currentProject.longerName}  </li></a>
                    <a className='projectPage__contentLink' href="#projectPricesDep"><li className="projectPage__contentText">?????????????? ???????????? ???????????? ???? {currentProject === null?  '' :currentProject.longerName}  </li></a>
                    <a className='projectPage__contentLink' href="#projectPaymentDep"><li className="projectPage__contentText">?????????? ???????????? ???????????? ???? {currentProject === null?  '' :currentProject.longerName}  </li></a>
                    <a className='projectPage__contentLink' href="#projectCompanyDep"><li className="projectPage__contentText">???????????? ?????????????? ??{currentProject === null?  '' :currentProject.longerName} </li></a>
                    <a className='projectPage__contentLink' href="#projectCompanyProjectsDep"><li className="projectPage__contentText">?????????? {currentProject === null?  '' :currentProject.projectDeveloperName} </li></a>
                    <a className='projectPage__contentLink' href="#projectCompanyOwnerDep"><li className="projectPage__contentText">???????? {currentProject === null?  '' :currentProject.projectDeveloperName} </li></a>
                    <a className='projectPage__contentLink' href="#projectSalesContactDep"><li className="projectPage__contentText">?????????????? ???? ???????????? ???????????? {currentProject === null?  '' :currentProject.projectDeveloperName} </li></a>
                    <Link className='projectPage__contentLink' to='/ar/'><li className="projectPage__contentText">?????????????? ???????????????? ?????????????? </li></Link>
                </ol>
            </div>
            <div className='homeInfo__container' id='projectLocationDep'>
                <h2 className='homeInfo__title'>???????? {currentProject === null?  '' :currentProject.detailedName} </h2>
                <p className='homeInfo__paragraph'> {currentProject === null?  '' :currentProject.locationDescription} </p>
                <ul className='homeInfo__list' ></ul>
                {currentProject === null?  '' :currentProject.locationPoints.split("\n").map((point,index)=>(<li key={index} className='homeInfo__point'> {point} </li>)) }
                {currentProject === null? '' : 
                <a href={currentProject.location === ''? residentialData[2].location : currentProject.location } className="propertyLocation__link">
                    <img src={mapImage} alt="Map Image" className="propertyLocation__pic"/>
                    <p className="propertyLocation__address">{currentProject === null?  '' :currentProject.address}</p>
                </a>
                }
            </div>

            <div className='homeInfo__container' id='projectSpaceDep'>
                <h2 className='homeInfo__title'> ?????????? {currentProject === null?  '' :currentProject.detailedName}</h2>
                <p className='homeInfo__paragraph'> {currentProject === null?  '' :currentProject.spaceDescription} </p>
            </div>
            <div className='homeInfo__container' id='projectServicesDep' >
                <h2 className='homeInfo__title'> ?????????? {currentProject === null?  '' :currentProject.detailedName}</h2>
                <p className='homeInfo__paragraph'> ???????? ???????????????? ???????????? ???? ?????????????? ???????????????? ??????: </p>
                <ul className='homeInfo__list' >
                    {currentProject === null?  '' :currentProject.services.split("\n").map((service,index)=>(<li key={index} className='homeInfo__point'> {service} </li>))}
                </ul>
            </div>
            <div className='homeInfo__container' id='projectPricesDep' >
                <h2 className='homeInfo__title'> ??????????????  ???? {currentProject === null?  '' :currentProject.detailedName}</h2>
                <p className='homeInfo__paragraph'> {currentProject === null?  '' :currentProject.prices} </p>
            </div>
            <div className='homeInfo__container' id='projectPaymentDep'>
                <h2 className='homeInfo__title'> ?????????? ???????????? ???????????? ???? {currentProject === null?  '' :currentProject.detailedName}</h2>
                <p className='homeInfo__paragraph'> ???????? {currentProject === null?  '' :currentProject.projectDeveloperName} ???????????? ???? ?????????? ???????????? ??????: </p>
                <ul className='homeInfo__list' >
                    {currentProject === null?  '' :currentProject.paymentOptions.split("\n").map((option,index)=>(<li key={index} className='homeInfo__point'> {option}  </li>))}
                </ul>
            </div>
            <div className='homeInfo__container' id='projectCompanyDep'>
                <h2 className='homeInfo__title'> ???????????? ?????????????? ??{currentProject === null?  '' :currentProject.detailedName}</h2>
                <p className='homeInfo__paragraph'> {currentProject === null?  '' :currentProject.projectDeveloperInfo} </p>
            </div>

            {currentProject === null? <></>:
            <>
            {currentProject.developerLastProjects === '' ? <></> : 
            <div className='homeInfo__container' id='projectCompanyProjectsDep'>
                <h2 className='homeInfo__title'> ?????????? {currentProject === null?  '' :currentProject.projectDeveloperName}</h2>
                <p className='homeInfo__paragraph'> ???????? ???????????? ???????????? ???? ?????????????????? ???????????????? ???????? ???????? ?????? ?????????? ???????????????? ?????? ?????? ??????????????????: </p>
                <ul className='homeInfo__list' >
                    {currentProject === null?  '' :currentProject.developerLastProjects.split("\n").map((project,index)=>(<li key={index} className='homeInfo__point'>  {project} </li>))}
                </ul>
            </div>
            }
            </>
            }
            
            {currentProject === null? <></> :
            <>
            {currentProject.projectOwners === '' ? <></>  : 
            <>
                <div className='homeInfo__container' id='projectCompanyOwnerDep'>
                    <h2 className='homeInfo__title'> ???????? {currentProject === null?  'data not available' :currentProject.projectDeveloperName}</h2>
                    <ul className='homeInfo__list' >
                        {currentProject === null?  'data not available' :currentProject.projectOwners.split("\n").map((owner,index)=>(<li key={index} className='homeInfo__point'> {owner} </li>))}
                    </ul>
                </div>
                {currentProject.developerOtherProject === ''? <></> :
                <>
                    <div className='homeInfo__container'>
                        <p className='homeInfo__paragraph'> {currentProject.developerOtherProject === ''?  '' :currentProject.developerOtherProject} </p>
                        {currentProject.developerOtherProjectServices === ''? <></> :
                        <>
                        <p className='homeInfo__paragraph'> ???????? {currentProject === null?  'data not available' :currentProject.projectDeveloperName} ?????? ?????????? ???????????? ???? ?????????????? ???? ?????? ?????????????? ?????? ?????? ?????? ??????????????: </p>
                        <ul className='homeInfo__list' >
                            {currentProject === null?  'data not available' :currentProject.developerOtherProjectServices.split("\n").map((service,index)=>(<li key={index} className='homeInfo__point'> {service} </li>))}
                        </ul>
                        </>
                        }
                    
                    </div>
                </>}
                
            </>
            }
            </>
            }
            
            
            <div className='homeInfo__container' id='projectSalesContactDep'>
                <p className='homeInfo__paragraph'> ?????????? ???????? ?????????????? ???????????? ???? ?????? ?????????? ???????????????? ???????????????? ???? ????????   <a href={currentProject === null?  '' :currentProject.projectSalesWhatsLink} className='projectSalesLink'> ?????????? ??????</a> </p>
            </div>
            <div className="projectPage__contactProject">
                <h2 className='homeInfo__title formTitle projectFormTitle'> ?????? ?????????????? ???? ?????????????? ???????????? ?????? ???????? ???? ????????????????</h2>
                <form className='homeForm__container projectForm__container'>
                    <h5 className='homeMessage__dataTitle' >??????????</h5>
                    <input className='homeMessage__input'  value={name} onChange={(e)=>setName(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >???????????? ??????????????????????</h5>
                    <input className='homeMessage__input'  value={email}  onChange={(e)=>setEmail(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >?????? ??????????????</h5>
                    <input className='homeMessage__input'  value={contactNumber}  onChange={(e)=>setContactNumber(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >?????????????? / ?????????????????? </h5>
                    <input className='homeMessage__input inputMessage' value={message}  onChange={(e)=>setMessage(e.target.value)} />
                    <button className='homeForm__button' onClick={(e)=>handleMessage(e)} >??????????</button>
                </form>
            </div>
            
        </div>
    )
}

export default ProjectPage
