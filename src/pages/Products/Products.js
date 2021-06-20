import React from 'react'
import { HomeObjTwo, HomeObjThree, HomeObjFour } from '../Products/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Products = () => {
    return (
        <div>
        <InfoSection {...HomeObjThree} />
         <InfoSection {...HomeObjTwo} />
       
       
        </div>
    )
}

export default Products