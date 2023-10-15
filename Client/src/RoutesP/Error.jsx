import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Img from '/src/assets/error.png';
const Error = () => {
  return (
    <Wrapper>
      <img src={Img} alt="error" />
      <NavLink to="/">
        <button className="btn"> Go Back</button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 50%;  
  }
  .btn {
    font-size: 1.2rem;
    margin-top: 3rem;
  }
`;

export default Error;