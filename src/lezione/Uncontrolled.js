import { useRef } from "react";

function Uncontrolled() {
  console.log('rendering uncontrolled component');
  
  const nameRef = useRef();
  const emailRef = useRef();

  function onSubmit() {
    console.log("Name value: " + nameRef.current.value);
    console.log("Email value: " + emailRef.current.value);
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" ref={nameRef} required />
      <input type="email" name="email" ref={emailRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Uncontrolled;