import React from 'react'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './SliderComponent.css'

function SliderComponent() {

    

    return (
        <div className='sliderComponent' dir='ltr'>
           
            <Slider autoplay='900'  >
                <div>
                    <img className='sliderImage' src='https://www.newcapitalcompound.com/ar/wp-content/uploads/2020/05/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg' />
               </div>
                <div>
                    <img className='sliderImage' src='https://www.uvisne.com/wp-content/uploads/2018/11/New-Capital-City-Map-Uvisne.png' />
               </div>
                <div>
                    <img className='sliderImage' src='https://www.newcapitalcompound.com/ar/wp-content/uploads/2020/05/%D8%AE%D8%B1%D9%8A%D8%B7%D8%A9-%D8%A7%D9%84%D8%B9%D8%A7%D8%B5%D9%85%D8%A9-%D8%A7%D9%84%D8%A7%D8%AF%D8%A7%D8%B1%D9%8A%D8%A9-%D8%A7%D9%84%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9.jpg' />
               </div>
                
            </Slider>
            <button onClick={()=>console.log(window)}>press</button>
        </div>
    )
}

export default SliderComponent


/*



*/