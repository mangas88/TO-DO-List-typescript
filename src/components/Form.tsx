import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useTasksDispatch } from '../TasksContext';

function Form() {
  const dispatch = useTasksDispatch();
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: 'added',
      id: "task-" + nanoid(),
      name
    })
    setName("");
  }
  
  const [name, setName] = useState('');

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Che cosa devi fare?
        </label>
      </h2>
      <input
        type="text"
        className="input input__lg"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Aggiungi
      </button>
    </form>
  );
}

export default Form;