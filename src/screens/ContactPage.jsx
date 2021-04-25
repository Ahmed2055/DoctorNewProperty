import React, {useState} from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import { firebase } from '../store/config'
import AddIcCallIcon from '@material-ui/icons/AddIcCall';

function ContactPage() {

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


    return (
        <div className='contactPage home'>
            <div className='homeCall__container'>
            <div className='homeCall__titleContainer' >
                <h2 className='homeInfo__title'>اتصل بنا</h2>
                <AddIcCallIcon fontSize='large' className='homeCall__titleIcon'/>
            </div>
            <p className='homeInfo__paragraph' >Mobile:  <Link to='/' className='homeCall__tel'>  +966565194027</Link></p>
            <p className='homeInfo__paragraph' >Mobile:  <Link to='/' className='homeCall__tel'>  +966565194027</Link></p>
            </div>

            <h2 className='homeInfo__title formTitle'> طلب عرض أسعار / إستفسار</h2>
            <form className='homeForm__container'>
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
    )
}

export default ContactPage
