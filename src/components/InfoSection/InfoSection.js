import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button} from '../../globalStyles'
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper, 
    TopLine, 
    Subtitle, 
    Heading,
    ImgWrapper,
    Img
} from './InfoSection.elements' 

const InfoSection = ({ 
    lightBg, 
    imgStart, 
    lightTopLine, 
    topLine, 
    headline, 
    lightText, 
    lightTextDesc, 
    primary, 
    buttonLabel,
    description, 
    img, 
    alt, 
    start }) => {
    return (
        <div>
         <InfoSec lightBg={lightBg}>
          <Container>
          <InfoRow imgStart={imgStart}>
           <InfoColumn>
           <TextWrapper>
            <TopLine lightTopLine={lightTopLine}>
            {topLine}</TopLine>
            <Heading lightText={lightText}>{headline}</Heading>
            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
            <Link to='/sing-up'>
              <Button big fontBig primary={primary}>
               {buttonLabel}
              </Button>
            </Link>
           </TextWrapper>
           </InfoColumn>
           <InfoColumn>
           <ImgWrapper start={start}>
             <Img src={img} alt={alt} />
           </ImgWrapper>
           </InfoColumn>
          </InfoRow>
          </Container>
         </InfoSec>   
        </div>
    )
}

export default InfoSection
