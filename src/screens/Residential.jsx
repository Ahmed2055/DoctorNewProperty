import React from 'react'
import Property from '../components/Property'
import './Residential.css'
import {residentialData} from '../store/propertyData'

function Residential() {
    return (
        <div className='residential'>
            {residentialData.map((property, index)=>
                <Property key={index} property={property} type='resid' />
            )}
            
        </div>
    )
}

export default Residential
