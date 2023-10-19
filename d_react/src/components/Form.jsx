import { useState } from "react";

const Form = () => {
  // ! Hier die States
  //   Best Practice ist für string leere string drin ("")
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState(""); //wir wollen kein
  const [happy, setHappy] = useState(false); //checkbox kann nur true or false sein

  console.log(happy);
  return (
    <>
      <section>
        <h2>Form</h2>
        <form action="">
          <input
            type="text"
            placeholder="firstname"
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
            value={firstname}
          />
          <input
            type="text"
            placeholder="lastname"
            onChange={(event) => {
              setLastname(event.target.value);
            }}
            value={lastname}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(event) => {
              setAge(Number(event.target.value));
            }}
            value={age}
          />
          <label htmlFor="happy"> Are you Happy?</label>
          <input
            id="happy"
            type="checkbox"
            onChange={(e) => {
              setHappy(e.target.checked);
            }}
            value={age}
          />
        </form>

        <article>
          <p>Vorname:{firstname}</p>
          <p>Nachname:{lastname}</p>
          <p>Alter:{age}</p>
          <p>Happy:{happy ? "😀" : "😣"}</p>
        </article>
      </section>
    </>
  );
};

export default Form;
