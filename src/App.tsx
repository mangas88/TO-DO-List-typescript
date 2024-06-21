import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import FilterButtonList from "./components/FilterButtonList";
import TaskContainer from "./components/TaskContainer";
import { useTasks } from './TasksContext';
import Lezione from "./lezione/Lezione";

import TaskInterface from './types/Task.interface';
import Filters from './types/Filters.type';
import Filter from './types/Filter.type';

const FILTERS: Filters = {
  Tutti: () => true,
  Rimasti: (task) => !task.completed,
  Completati: (task) => task.completed
};

function App() {
  const [filter, setFilter] = useState<Filter>('Tutti');
  const tasks = useTasks();

  useEffect(() => {
    console.log(tasks)
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])
 
  return (
    <>
      {/* <Lezione/> */}
      <h1>I miei task</h1>
      <div className="todoapp">
        <Form />
        <FilterButtonList 
          filter={filter}
          filters={FILTERS}
          setFilter={setFilter}
        />
        <TaskContainer 
          selectedFilter={FILTERS[filter]}
        />
      </div>
    </>
  );
}

export default App;