import styled from "styled-components";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const FooterContain = styled.div`
color:black;
background:green;
cursor:pointer;
`
const FooterContainer = styled.div`
display:flex;
 justify-content:flex-end;
   `
const FooterMagoso = styled.div`
width:23%;
// margin:3em;
align-items:center;
text-decoration:underline;
`
const FooterMagosoText = styled.p`
width:70%;
`
const FooterCustomer = styled.div`
width:23%;
`
const CustomerText = styled.p``
const FooterHeading = styled.h3`
font-size:1.5em;
text-decoration:underline;
`
const FooterHeadings = styled.h3`
font-size:1.6em;
`
const FooterLinks = styled.div`
width:23%;
cursor:pointer;
`
const LinkText = styled.p``
const FooterContact = styled.div`
width:23%;
`
const ContactText = styled.p`
cursor:pointer;
`
const FooterCopy = styled.p`
text-align:center;
`
const FooterHeart = styled.span`
`
const Span = styled.span`
color:white;`
const Footer = () => {
    return (
        <FooterContain>
            <FooterContainer>
                <FooterMagoso>
                    <FooterHeadings>MAGOSO ENT.</FooterHeadings>
                    <FooterMagosoText>The #1 E-Commerce website in the south of Limpompo</FooterMagosoText>
                </FooterMagoso>
                <FooterCustomer>
                    <FooterHeading>FOR CUSTOMERS</FooterHeading>
                    <CustomerText>How to order</CustomerText>
                    <CustomerText>Payment Methods</CustomerText>
                    <CustomerText>My Account</CustomerText>
                    <CustomerText>Track Orders</CustomerText>
                </FooterCustomer>
                <FooterLinks>
                    <FooterHeading>QUICK LINKS</FooterHeading>
                    <LinkText>Shop</LinkText>
                    <LinkText>About Us</LinkText>
                    <LinkText>Return Policy</LinkText>
                    <LinkText>Terms & Conditions</LinkText>
                </FooterLinks>
                <FooterContact>
                    <FooterHeading>CONTACT US</FooterHeading>
                    <ContactText> We are located at:</ContactText>
                    <ContactText>{<LocationOnIcon />} Juja Road</ContactText>
                    <ContactText>Nairobi- Kenya, P.O Box 28873-00200</ContactText>
                    <ContactText>{<CallIcon />} Call: 0787654321</ContactText>
                    <ContactText>{<EmailIcon />} Email: info@magosoent.com</ContactText>
                </FooterContact>
            </FooterContainer>
            <FooterCopy> Copyright &copy;2022 ||
                < FooterHeart> Developed with <Span>love;</Span> by PhibyMaty.</FooterHeart>
            </FooterCopy>
        </FooterContain>
   

    

    
    )
    
}
    export default Footer;