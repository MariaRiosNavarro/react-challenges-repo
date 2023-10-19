import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
`;

const Form1_6 = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <Form>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          value={lastname}
          onChange={(event) => {
            setLastname(event.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </Form>
      <div>
        <p>Name:{name}</p>
        <p>Nachname:{lastname}</p>
        <p>Email:{email}</p>
      </div>
    </>
  );
};

export default Form1_6;
