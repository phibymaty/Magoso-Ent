import ContactItem from "./ContactItem";
import styled from "styled-components";
const Contact = () => {
  const ContactContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <ContactContainer>
      <inpute type="text" placeholder="Email" />
      <inpute type="text" placeholder="password" />
      <inpute type="text" placeholder="re-enter" />
    </ContactContainer>
  );
};
export default Contact;
