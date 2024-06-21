import React, { useEffect, useRef, useState } from "react";
import { useTasksDispatch } from '../TasksContext';

import TaskInterface from '../types/Task.interface'

interface TaskProps {
  task: TaskInterface
}

export default function Task({task}: TaskProps) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const editFieldRef = useRef(null);
  const dispatch = useTasksDispatch();

  useEffect(() => {
    if (isEditing) {
      editFieldRef.current.focus(); 
    }
  }, [isEditing]);

  function handleChange(e: React.FormEvent<HTMLInputElement>) {
    setNewName(e.currentTarget.value);
  }

  function deleteTask(id: string) {
    dispatch({
      type: 'deleted',
      id
    })
  }
  
  function toggleTaskCompletion(id: string) {
    dispatch({
      type: 'toggled',
      id
    })
  }
  
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newTask = {
      ...task,
      name: newName
    }
    dispatch({
      type: 'edited',
      task: newTask
    })
    setNewName("");
    setEditing(false);
  }

  const viewTemplate = (
    <div className="stack-small">
      <div className="container">
        <input
          id={task.id}
          type="checkbox"
          defaultChecked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span
          className={task.completed ? "completed" : ""}
          // htmlFor={task.id}
        >
          {task.name}
        </span>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => setEditing(true)}
        >
          Modifica
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(task.id)}
        >
          Elimina
        </button>
      </div>
    </div>
  );

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id}>
          Modifica {task.name}
        </label><br/>
        <input
          id={task.id}
          className="todo-text"
          type="text"
          value={newName}
          onChange={handleChange}
          ref={editFieldRef}
        />
      </div>
      <div className="btn-group">
        <button
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
        >
          Cancella
        </button>
        <button type="submit" className="btn btn__primary todo-edit">
          Salva
        </button>
      </div>
    </form>
  );

  return (
    <li className="todo">
      {isEditing ? editingTemplate : viewTemplate}
    </li>
  )
}
