import styled from "styled-components";
import { useState } from "react";

// !Html version

// const Summary = styled.summary`
//   &::after {
//     content: " ▼";
//   }
// `;

// const Details = styled.details`
//   &[open] ${Summary}::after {
//     content: " ▲";
//   }
// `;

// const FAQ = () => {
//   return (
//     <>
//       <Details>
//         <Summary>Why is React Great?</Summary>
//         <p>Fast learning curve</p>
//       </Details>
//     </>
//   );
// };

const MainWrapper = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  padding: 2rem;
  background-color: gray;
`;

const WrapperQuestion = styled.div`
  display: flex;
`;

const Answer = styled.p`
  padding: 1rem;
  min-height: 20px;
`;

const FAQ = () => {
  const [message, setMessage] = useState(false);

  return (
    <>
      <MainWrapper>
        <WrapperQuestion>
          <p>Why is React Great?</p>
          <button
            onClick={() => {
              setMessage((message) => !message);
            }}
          >
            {message ? "⬆" : "⬇"}
          </button>
        </WrapperQuestion>
        <Answer>{message ? "Fast learning curve" : ""}</Answer>
      </MainWrapper>
    </>
  );
};

export default FAQ;
