import { useState } from "react";
import styles from './Password.module.css';

function Password() {
  const [touched, setTouched] = useState(false);
  const [myText, setMyText] = useState('');
  const [characters, setCharacters] = useState(0);
  const [error, setError] = useState('');
  // let formattedText = myText.toUpperCase();
  
  function updateInput(e) {
    setCharacters(e.target.value.length)
    setMyText(e.target.value);
    touched && checkLength(e.target.value)
  }
  
  function checkLength(word) {
    word.length  < 8 ? setError('La password deve avere almeno 8 caratteri') : setError('');
  }
  
  function handleBlur() {
    !touched && setTouched(true);
    checkLength(myText)
  }

  return (
    <div>
      <span>Password:</span>
      <input value={myText} onChange={updateInput} onBlur={handleBlur} />
      <span className={touched ? characters < 8 ? styles.error : styles.correct : ''}>{characters}/8</span>
      <br/>
      {touched && (
        <span>
          <strong>
            {error}
            {/* {formattedText} */}
          </strong>
        </span>
      )}
      <br/>
      <br/>
    </div>
  )
}

export default Password;