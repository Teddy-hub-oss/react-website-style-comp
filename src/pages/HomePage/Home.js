import React from 'react'
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from '../HomePage/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Home = () => {
    return (
        <div>
         <InfoSection {...HomeObjOne} />
         <InfoSection {...HomeObjTwo} />
         <InfoSection {...HomeObjThree} />
         <InfoSection {...HomeObjFour} />
       
        </div>
    )
}

export default Home