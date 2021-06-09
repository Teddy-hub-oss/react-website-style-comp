import React from 'react'
import { HomeObjOne } from './Data'
// import { InfoSection} from '../../components/InfoSection/InfoSection'
import  InfoSection from '../../components/InfoSection/InfoSection'

const Home = () => {
    return (
        <div>
         <InfoSection {...HomeObjOne} />
        </div>
    )
}

export default Home
