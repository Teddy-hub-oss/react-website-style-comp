import React from 'react'
import { HomeObjOne, HomeObjThree } from '../SignUp/Data'
import  InfoSection from '../../components/InfoSection/InfoSection'

const SignUp = () => {
  <div>
  <InfoSection {...HomeObjOne} />
  <InfoSection {...HomeObjThree} />
   
  </div>
}

export default SignUp
