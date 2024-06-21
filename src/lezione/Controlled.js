import { useState } from "react";
import Password from "./Password";

function Controlled() {
  console.log('rendering controlled component');

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    console.log("Name value: " + name);
    console.log("Email value: " + email);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <span>{name}</span>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
      <span>{email}</span>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default Controlled;