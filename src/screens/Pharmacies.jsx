import React from 'react'
import Property from '../components/Property';
import './Residential.css'
import {pharmaciesData} from '../store/propertyData'

function Pharmacies() {
    return (
        <div className='residential'>
             {pharmaciesData.map((property, index)=>
                <Property key={index} property={property} type='pharm'/>
            )}
           
        </div>
    )
}

export default Pharmacies
