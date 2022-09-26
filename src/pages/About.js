import AboutItem from "./AboutItem";
import styled from "styled-components";

const AboutItemText = styled.p`
    align-items: center;
  `;
  const Container = styled.div`
  margin:3em;
  `;


const About = () => {
    return (
    <AboutItemText>
      <Container>
      {/* <h1>Bread manufacturering</h1>
        <p>We have been manufacturering plastic breads and other many craft,toys,jewelry and so many others
        We sell long lasting items at affordable price across the world any time,any place we are at your services.</p>
       <p> If you would like to become a wholesale customer, please fill out and return the customer information form found on the contact page</p> */}


      </Container>
    </AboutItemText>

  );
};
export default About;
