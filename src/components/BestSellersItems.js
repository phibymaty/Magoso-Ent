import { bestSellers } from "../data";
import styled from "styled-components";
import SendIcon from '@mui/icons-material/Send';

const BestSellersItemContainer = styled.div`

width:30%;
`;

const ImageContainer = styled.div`


`;

const BestSellersInfo = styled.div`


`;

const BestSellersHeading = styled.h2`
text-align:center;
margin:1em 0;

`;
const BestSellersTitle=styled.h3``


const BestSellersPrice = styled.div`

font-size:2em;
`;
const Image = styled.img`
width: 100%;
height:350px;

`;
const Button = styled.button`
padding:1em;
background:orange;
color:white;
font-size:1em;
border-radius:5px;
margin-right:1em;



`;
const ButtonSellerBtn = styled.div`
margin:1em;
 `;

const SellerButton = styled.button`
background:purple;
font-size:1em;
color:white;
padding:1em;
border-radius:5px;



`;

const BestSellerContainer = styled.div`
display: flex;
  justify-content: space-between;
  text-align:center;
  flex-wrap: wrap;
  gap: 2em;
  width: 80%;
  margin: 0 auto;
 
// `;
// const SearchIcon = styled.div``;
// const SearchInput = styled.div``;

const BestSellersItem = () => {
  return (
    <>
      <BestSellersHeading>Best Sellers</BestSellersHeading>

      <BestSellerContainer>
        {bestSellers.slice(0, 3).map((item, index) => {
          return (
            <>

              <BestSellersItemContainer>
                <ImageContainer>
                  <Image src={item.img} />
                </ImageContainer>


                <BestSellersInfo>
                  <BestSellersTitle>{item.name}</BestSellersTitle>
                  <BestSellersPrice>Ksh. {item.price}/=</BestSellersPrice>

                  <ButtonSellerBtn>
                    <Button>Add to cart</Button>
                    <SellerButton>Buy Now</SellerButton>
                  </ButtonSellerBtn>

                </BestSellersInfo>
              </BestSellersItemContainer>

            </>
          );
        })}
        

      </BestSellerContainer>




    </>
  );
};
export default BestSellersItem;
