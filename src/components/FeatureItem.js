import Features from "./Features";
import styled from "styled-components"
const FeatureItemContainer=styled.div`
width:fit-content;
padding:1em 2em;
box-shadow:green;
gap:2em;
border:1px solid lightGrey;
border-radius:5px;
display:flex;
align-items:center;

`
const FeatureItemText=styled.h3``


const FeatureItem=({text,icon,borderColor})=>{
    return(
        <>
        <FeatureItemContainer style={{borderTop:`5px solid ${borderColor}`}}>
          {icon}
          <FeatureItemText>{text}</FeatureItemText>  
    </FeatureItemContainer>
    </>
    )
}
export default FeatureItem;