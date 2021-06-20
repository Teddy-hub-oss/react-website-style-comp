import React from 'react'
import {  HomeObjFour, HomeObjTwo, HomeObjOne} from '../Services/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Services = () => {
    return (
        <div>
         <InfoSection {...HomeObjFour} />
         <InfoSection {... HomeObjOne} />
         <InfoSection {...HomeObjTwo} />
        
        </div>
    )
}

export default Services