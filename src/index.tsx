import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TasksProvider } from './TasksContext';

// const DATA = [
//   { id: "todo-0", name: "Studia", completed: true },
//   { id: "todo-1", name: "Programma", completed: false },
//   { id: "todo-2", name: "Rilassati", completed: false }
// ];

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <TasksProvider>
      <App/>
    </TasksProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
