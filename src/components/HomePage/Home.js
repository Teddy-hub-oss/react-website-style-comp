import React from 'react'
import { HomeObjOne, HomeObjTwo, HomeObjThree, HomeObjFour } from './Data'
// import { InfoSection} from '../../components/InfoSection/InfoSection'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Home = () => {
    return (
        <div>
         <InfoSection {...HomeObjOne} />
         <InfoSection {...HomeObjTwo} />
       
        </div>
    )
}

export default Home
