import React from 'react'
import { HomeObjThree, HomeObjFour} from '../SignUp/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const SignUp =  () => {
    return (
        <div>
         <InfoSection {...HomeObjThree} />
         <InfoSection {...HomeObjFour} />
        </div>
    )
}

export default SignUp