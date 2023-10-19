import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) =>
    props.theme === "dark" ? "black" : "lightyellow"};
  color: ${(props) => (props.theme === "dark" ? "lightyellow" : "black")};
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.theme === "dark" ? "black" : "lightyellow"};
  color: ${(props) => (props.theme === "dark" ? "lightyellow" : "black")};
  padding: 2rem;
  border-radius: 5px;
`;

// !Version mit use State String : useState("light")

// const DarkToggle = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <>
//       <Wrapper theme={theme}>
//         <h2>Theme is {theme} </h2>
//         <Button
//           theme={theme}
//           onClick={() => {
//             setTheme(theme === "light" ? "dark" : "light");
//           }}
//         >
//           {theme === "light" ? "Change to night" : "Change to day"}
//         </Button>
//       </Wrapper>
//     </>
//   );
// };

// ! Version mit Boolean useState(false);

const DarkToggle = () => {
  const [dark, setDark] = useState(false);
  const theme = dark ? "dark" : "light";

  return (
    <>
      <Wrapper theme={theme}>
        <h2>Theme is {theme}</h2>
        <Button
          theme={theme}
          onClick={() => {
            setDark((dark) => !dark);
          }}
        >
          {dark ? "Change to day" : "Change to night"}
        </Button>
      </Wrapper>
    </>
  );
};

export default DarkToggle;
