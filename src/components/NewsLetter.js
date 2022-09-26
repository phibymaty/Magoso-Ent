import styled from "styled-components";
import NewslatterItem from "./NewsLeterItem";

const Newslatter=styled.p`
text-align:center;
`;
const NewsLetter = () => {
    return (
        <div>
            <h4>Subscribe to our Newslatter</h4>
            Subscribe to our Newslatter for updates on latest promotions and offers
            < input src="text" placeholder="Email address" ></input >
            {/* <SearchIcon />
            <SearchInput type="text" placeholder="plane" /> */}
        </div>
    )
}
export default NewsLetter