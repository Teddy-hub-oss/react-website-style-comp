import React from 'react'
import { HomeObjTwo, HomeObjThree, HomeObjFour } from '../HomePage/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Products = () => {
    return (
        <div>
       
         <InfoSection {...HomeObjTwo} />
         <InfoSection {...HomeObjThree} />
         <InfoSection {...HomeObjFour} />
       
        </div>
    )
}

export default Products