import styled from "styled-components";
import Counter from "../components/Counter";

const Wrapper = styled.section`
  background-color: green;
`;

const Chall2_1 = () => {
  return (
    <>
      <Wrapper>
        <h4>Chall2_1</h4>
        <Counter />
      </Wrapper>
    </>
  );
};

export default Chall2_1;
