import React from 'react'
import Property from '../components/Property'
import './Residential.css'
import {clinicData} from '../store/propertyData';

function Clinics() {
    return (
        <div className='residential'>
            {clinicData.map((property, index)=>
                <Property key={index} property={property} type='clini' />
            )}
            
            <button onClick={()=>console.log(clinicData)} />
        </div>
    )
}

export default Clinics
