import LogIn from "./LogIn";
import styled from "styled-components";

const LogInContainer = styled.div`

`;

const ContainerLogin = styled.div`
 
`;
const LogInLeft = styled.div`
  padding: 1em 2em;
  border: 2px solid lightGrey;
  width: 50%;
`;
const LogInRight = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  box-shadow: 2px 2px 4px solid darkGrey;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(" https://images.pexels.com/photos/6192554/pexels-photo-6192554.jpeg?cs=srgb&dl=pexels-rodnae-productions-6192554.jpg&fm=jpg");
  background-reapeat: no-repeat;
  background-size: cover;
`;
const ContainerLogIn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Logo = styled.h1`
  text-align: center;
`;
const Heading = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 2em;
  color: green;
`;
const LogInEmail = styled.input`
  font-size: 1em;
  border: none;
  border-bottom: 2px solid orange;
  width: 100%;
`;
const LogInPassword = styled.input`
  font-size: 1em;
  width: 100%;
  border: none;
  border-bottom: 2px solid orange;
`;
const LogInButton = styled.button`
  font-size: 1em;
  border-radius: 5px;
  width: 100%;
  padding: 0.5em;
  background: green;
  color: orange;
`;
const LogInCheckbox = styled.input``;

const LogInText = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`;
const ForgetPassword = styled.div`
`;
const LogInPassorwd = styled.p`
  font-size: 1em;
`;
const ButtonText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;
const LogInBottomText = styled.div`
  paddind: 1em;
`;
const LogInBottomButton = styled.div`
//   font-size: 1em;
//   paddng: 1em;
`;

const BottomButton = styled.button`
padding:1em;
margin:1em;
border-radius:5px;
background:green;
color:orange;
font-size:1em;
`;
const RightHeading = styled.div`
  color: white;
  justify-content: space-between;
  padding: 2em;
`;
const RightHeadingText = styled.h1`
  text-decoretion: uppercase;
`;
const RightHeadingText1 = styled.h1``;
const LogTextpassword = styled.p`
  display: fex;
  padding: 2em;
`;
const LogInDiv = styled.div`
  padding: 2em;
`;
const CheckBoxParagraph = styled.p`
  padding: 2em;
`;
const LogInBottomBottom = styled.div`

`;

const LogInItems = () => {
  return (
    <LogInContainer>
      <ContainerLogIn>
        <LogInLeft>
          <Logo>Magoso Ent.</Logo>
          <Heading>LogIn</Heading>
          <LogTextpassword>
            <LogInEmail type="Email" placeholder="Email" />
          </LogTextpassword>
          <LogInDiv>
            <LogInPassword type="text" placeholder="password" />
          </LogInDiv>
          <LogInButton>login</LogInButton>
          <LogInText>
            <CheckBoxParagraph>
              <LogInCheckbox type="checkbox" />
              <checkboxText>Remember Me</checkboxText>
            </CheckBoxParagraph>
            <ForgetPassword>
              <LogInPassorwd>Forgot your password ?</LogInPassorwd>
            </ForgetPassword>
          </LogInText>
          <ButtonText>
            <LogInBottomButton>
              <LogInBottomText>New to Magoso Ent ?</LogInBottomText>
            </LogInBottomButton>
            <LogInBottomBottom>
              <BottomButton>Create Account</BottomButton>
            </LogInBottomBottom>
          </ButtonText>
        </LogInLeft>
        <LogInRight>
          <RightHeading>
            <RightHeadingText>Welcome to Magoso Ent</RightHeadingText>
            <RightHeadingText1>
              The Home of Realiable Shopping
            </RightHeadingText1>
          </RightHeading>
        </LogInRight>
      </ContainerLogIn>
    </LogInContainer>
  );
};

export default LogInItems;
