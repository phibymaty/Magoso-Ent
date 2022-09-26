import { categories } from "../data";
import styled from "styled-components";

const CategoriesItemContainer = styled.div`
position: relative;
width:30%;
height:300px;

`;
const ImageContainer = styled.div`
width:100%;
height:100%;


`;
const CategoriesInfo = styled.div`
position: absolute;
top:0;
left:0;
z-index:10;
background:rgba(0,0,0,0.5);
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;

color:white;
font-size:20px;
`;
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;
`;
const CategoriesHeading = styled.h2`
text-align:center;
margin:2em 0;
`;
const   CartegoriesContainer=styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
gap:1em;

margin:0 auto;
`;

const CategoriesItem = () => {

   
  return (
    <>
    
    < CategoriesHeading >
    Browse categories
    </CategoriesHeading >
    <CartegoriesContainer>
         
      {categories.map((category, index) => {
        return (
         
            <CategoriesItemContainer>
              
              <ImageContainer>
              
                <Image src={category.img} />
              </ImageContainer>
              <CategoriesInfo>
                
                <CategoriesHeading>{category.name}</CategoriesHeading>
              </CategoriesInfo>
            </CategoriesItemContainer>
      
        );
      })}
    
    </CartegoriesContainer>
    </>
  );
};

export default CategoriesItem;
