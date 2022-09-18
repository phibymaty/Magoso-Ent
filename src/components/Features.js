import FeatureItem from "./FeatureItem";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import PercentIcon from '@mui/icons-material/Percent';
import DiamondIcon from '@mui/icons-material/Diamond';
import styled from "styled-components";

const FeaturesContainer=styled.div`
padding:1em 2em;

`
const Container=styled.div`
justify-content:space-between;
display:flex;
width:80%;
margin:0 auto;
`
const Features = () => {
  return (
   
    <FeaturesContainer>
        <Container>

      <FeatureItem  icon={<QueryBuilderIcon/>} text="24/7" borderColor="green"/>
      <FeatureItem icon={<PercentIcon/>} text="Great offers" borderColor="orange"/>
      <FeatureItem  icon={<DiamondIcon/>} text="Quality" borderColor="purple"/>
      </Container>
    </FeaturesContainer >
  );
};
export default Features;
