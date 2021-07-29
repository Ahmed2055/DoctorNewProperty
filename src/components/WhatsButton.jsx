import React from 'react';
import './WhatsButton.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function WhatsButton() {
    return (
        <a className='whatsButton'  href="https://wa.me/+966565194027">
           <WhatsAppIcon fontSize='large' className='whatsButton__icon'  />
        </a>
    )
}

export default WhatsButton
