import { slides } from "../data";
import styled from "styled-components";


const SlideContainer =styled.div``
const SliderItem=styled.div`
position:relative;
width:100vw;
height:70vh;
`
const ImageContainer=styled.div`
 width:100%;
height:100%;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const SliderInfo=styled.div`
position:absolute;
top:0;
left:0;
`
const SliderHeading=styled.h2``
const SliderDescription=styled.p``
const Button=styled.button``

const Slider = () => {
  return (
    <SlideContainer>
      {
  slides.map((slides, index) => {
    return(
        
<SliderItem >
  <ImageContainer>
          <Image src={slides.img}/>
          </ImageContainer>
        <SliderInfo>
          <SliderHeading>{slides.name}</SliderHeading>
       
        
        <SliderDescription>{slides.desc}</SliderDescription>
      
        
        <Button>{slides.name} shop</Button>
        </SliderInfo>
        </SliderItem>
      
    )
      }) 

      }
  
  </SlideContainer>
  );
  
};

export default Slider;
