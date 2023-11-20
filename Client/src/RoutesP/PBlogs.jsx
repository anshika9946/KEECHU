import styled from "styled-components";
import Img from '/src/assets/coming.svg';

const PBlogs = () => {
  return (
    <Wrapper>
      <img src={Img} alt="error" />
    </Wrapper>
  );
};

const Wrapper = styled.section`
max-widhth:10rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 70%; 
  }
  
`;

export default PBlogs;