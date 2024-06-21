import Child from "./Child";
import Controlled from "./Controlled";
import Uncontrolled from "./Uncontrolled";
import Parent from "./Parent";
import Password from "./Password";

function Lezione() {
  return(
    <>
      <Parent>
        <Child/>
      </Parent>
      <Parent>
        <h3>Altro contenuto</h3>
        <p>Altro contenuto</p>
      </Parent>
      <Controlled/>
      <br/>
      <Uncontrolled/>
      <Password/>
    </>
  )
}

export default Lezione;