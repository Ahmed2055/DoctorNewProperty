import React from 'react'
import Property from '../components/Property'
import './Residential.css'
import {commercialData} from '../store/propertyData'

function Commercial() {
    return (
        <div className='residential'>
             {commercialData.map((property, index)=>
                <Property key={index} property={property}  type='comme' />
            )}
            
        </div>
    )
}

export default Commercial
