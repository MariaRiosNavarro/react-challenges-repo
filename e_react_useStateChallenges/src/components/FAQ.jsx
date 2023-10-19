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
  min-height: 250px;
  padding: 2rem;
  background-color: gray;
`;

const WrapperQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Question = styled.p`
  font-size: 2rem;
`;

const Answer = styled.p`
  padding: 1rem;
  min-height: 20px;
  font-size: 1.5rem;
`;

const Button = styled.button`
  border-radius: 8px;
  padding: 0.5rem 1rem;
  margin: 1rem;
`;

const FAQ = () => {
  const [message, setMessage] = useState(false);

  return (
    <>
      <MainWrapper>
        <WrapperQuestion>
          <Question>Why is React Great?</Question>
          <Button
            onClick={() => {
              setMessage((message) => !message);
            }}
          >
            {message ? "⬆" : "⬇"}
          </Button>
        </WrapperQuestion>
        <Answer>{message ? "Fast learning curve" : ""}</Answer>
      </MainWrapper>
    </>
  );
};

export default FAQ;
