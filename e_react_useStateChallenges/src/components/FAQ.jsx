import styled from "styled-components";

const Summary = styled.summary`
  &::after {
    content: " ▼";
  }

  &::-webkit-details-marker {
    visibility: hidden;
  }
`;

const Details = styled.details`
  &[open] ${Summary}::after {
    content: " ▲";
  }
`;

const FAQ = () => {
  return (
    <>
      <Details>
        <Summary>Why is React Great?</Summary>
        <p>Fast learning curve</p>
      </Details>
    </>
  );
};

export default FAQ;
