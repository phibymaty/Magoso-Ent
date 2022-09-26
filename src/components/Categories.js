import styled from "styled-components";
import CategoriesItem from "./CategoriesItem";
const CartegorieContainer=styled.div`
width:80%;
margin:0 auto;
`;


const Categories = () => {
  return (

    <CartegorieContainer>
    <CategoriesItem/>
    </CartegorieContainer>
  )

  
};
export default Categories;
