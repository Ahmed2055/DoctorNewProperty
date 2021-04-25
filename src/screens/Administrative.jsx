import React from 'react'
import Property from '../components/Property'
import './Residential.css'
import {administrativeData} from '../store/propertyData'

function Administrative() {
    return (
        <div className='residential'>
            {administrativeData.map((property, index)=>
                <Property key={index} property={property} type='admin' />
            )}
            
        </div>
    )
}

export default Administrative
