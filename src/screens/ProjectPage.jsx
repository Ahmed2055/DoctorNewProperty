import React, {useState} from 'react'
import './ProjectPage.css'
import './Home.css'
import { Link } from "react-router-dom";
import { firebase } from '../store/config'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import {residentialData} from '../store/propertyData.jsx'
import mapImage from '../pics/mapImage.png';

function ProjectPage() {

    const [activePic, setActivePic] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [message, setMessage] = useState('')

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
    if(activePic != residentialData[2].pics.length-1){
        setActivePic(activePic+1)
        }
    }
    const goLeftPic = ()=>{
        if(activePic != 0){
            setActivePic(activePic-1)
        }
    }

    return (
        <div className='projectPage'>
            <div className="projectPage__nameContainer">
                <h2 className="projectPage__name"> كمبوند انترادا افينو العاصمة الادارية </h2>
                <p className="projectPage__nameDate">  أبريل 21, 2021 </p>
            </div>
            <div className="projectPage__contactProject">
                <h2 className='homeInfo__title formTitle projectFormTitle'> سجل بياناتك فى المشروع للتعرف على مزيد من التفاصيل</h2>
                <form className='homeForm__container projectForm__container'>
                    <h5 className='homeMessage__dataTitle' >الإسم</h5>
                    <input className='homeMessage__input'  value={name} onChange={(e)=>setName(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >البريد الإليكتروني</h5>
                    <input className='homeMessage__input'  value={email}  onChange={(e)=>setEmail(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >رقم التواصل</h5>
                    <input className='homeMessage__input'  value={contactNumber}  onChange={(e)=>setContactNumber(e.target.value)} />
                    <h5 className='homeMessage__dataTitle' >الرسالة / الإستفسار </h5>
                    <input className='homeMessage__input inputMessage' value={message}  onChange={(e)=>setMessage(e.target.value)} />
                    <button className='homeForm__button' onClick={(e)=>handleMessage(e)} >إرسال</button>
                </form>
            </div>
            <div className="projectPage__imagesContainer">
                <div className="propertyPics" >
                    <button className='propertyPics__changerRight' onClick={()=>goRightPic()}  > <ArrowForwardIosIcon fontSize='small' /> </button>
                    <img className="propertyPic projectPic" src={residentialData[2] === null?  'data not available' : residentialData[2].pics[activePic]}  />
                    <button className='propertyPics__changerLeft' onClick={()=>goLeftPic()} > <ArrowBackIosIcon fontSize='small'/> </button>
                </div>
                <div className="proprtyPics__counterContainer" dir='ltr'>{residentialData[2] === null?  'data not available' : residentialData[2].pics.map((image,index)=>(<Brightness1Icon key={index} className={activePic === index? 'proprtyPics__counterIconActive': 'proprtyPics__counterIcon'} fontSize='small'  />))}</div>
            </div>
            <div className="projectPage__contentsContainer">
                <h3 className="projectPage__contentTitle">محتوي المقالة</h3>
                <ol className="projectPage__content">
                    <a className='projectPage__contentLink' href="/"><li className="projectPage__contentText">موقع كمبوند انترادا افينو العاصمة </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">مساحة كمبوند انترادا افينو العاصمة </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">خدمات كمبوند انترادا افينو العاصمة  </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">الأسعار وأنظمة السداد في كمبوند انترادا افينو العاصمة  </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">أنظمة السداد والدفع في كمبوند انترادا افينو العاصمة  </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">الشركة المالكة لكمبوند انترادا افينو العاصمة </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">أعمال شركة صروح العقارية </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">ملاك شركة صروح العقارية </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">التواصل مع مسئولي مبيعات شركة صروح العقارية </li></a>
                    <a className='projectPage__contentLink' href=""><li className="projectPage__contentText">العاصمة الادارية الجديدة </li></a>
                </ol>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'>موقع كمبوند انترادا افينو العاصمة الادارية </h2>
                <p className='homeInfo__paragraph'> يقع كمبوند انترادا افينو العاصمة الادارية في موقع حيوي ومميز في العاصمة الإدارية الجديدة، وذلك لأنه يقع في المنطقة R7، ويقع بالقرب من النهر الأخضر وأرض المعارض ومحور محمد بن زايد الجنوبي والكاتدرائية، مما جعله من أهم مشروعات الشركة في العاصمة الإدارية الجديدة. </p>
                <a href={residentialData[2].location} className="propertyLocation__link">
                    <img src={mapImage} alt="Map Image" className="propertyLocation__pic"/>
                    <p className="propertyLocation__address">{residentialData[2] === null?  'data not available' : residentialData[2].address}</p>
                </a>
            </div>

            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> مساحة كمبوند انترادا افينو العاصمة الادارية</h2>
                <p className='homeInfo__paragraph'> تم تنفيذ كنبوند انترادا افينو العاصمة الادارية على مساحة 72 فدان، وقد حرصت الشركة على تخصيص أكبر مساحة منه للمساحات الخضراء، بحيث تبلغ مساحة المباني والإنشاءات على 18% فقط من المساحة، وتبقى 82% من المساحة  للمناظر الطبيعية الخلابة، كما تبدأ المساحات داخل هذا الكمبوند منز80 متر مربع إلى 241 متر مربع. </p>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> الشاطئية</h2>
                <p className='homeInfo__paragraph'>  </p>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> الشاطئية</h2>
                <p className='homeInfo__paragraph'>  </p>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> الشاطئية</h2>
                <p className='homeInfo__paragraph'>  </p>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> الشاطئية</h2>
                <p className='homeInfo__paragraph'>  </p>
            </div>
            <div className='homeInfo__container'>
                <h2 className='homeInfo__title'> الشاطئية</h2>
                <p className='homeInfo__paragraph'>  </p>
            </div>
            
        </div>
    )
}

export default ProjectPage
