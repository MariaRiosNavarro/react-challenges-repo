import { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);

  const isHidden = count === 0;

  return (
    <>
      <Section>
        <h2>Counter</h2>
        <p style={{ visibility: isHidden ? "hidden" : "visible" }}>{count}</p>
        <Wrapper>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
        </Wrapper>
      </Section>
    </>
  );
};

export default Counter;
