import styled from "styled-components";

const Summary = styled.summary`
  &::after {
    content: " ▼"; /* Ein Pfeil nach unten */
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

const Details = styled.details`
  &[open]Summary::after {
    content: " ▲"; /* Ein Pfeil nach oben */
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
