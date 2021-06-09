import React from 'react'
import { Link } from 'react-router-dom'
import { Container} from '../../globalStyles'
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper} from './InfoSection.elements' 

const InfoSection = ({ lightBg, imgStart }) => {
    return (
        <div>
         <InfoSec lightBg={lightBg}>
          <Container>
          <InfoRow imgStart={imgStart}>
           <InfoColumn>
           <TextWrapper>h</TextWrapper>
           </InfoColumn>
          </InfoRow>
          </Container>
         </InfoSec>   
        </div>
    )
}

export default InfoSection
