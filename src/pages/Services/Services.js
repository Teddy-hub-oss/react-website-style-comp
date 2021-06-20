import React from 'react'
import {  HomeObjFour } from '../HomePage/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Services = () => {
    return (
        <div>
         <InfoSection {...HomeObjFour} />
         <InfoSection {...HomeObjFour} />
         <InfoSection {...HomeObjFour} />
        </div>
    )
}

export default Services