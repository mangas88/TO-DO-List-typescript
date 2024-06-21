import { createContext, useContext, useReducer } from 'react';
import tasksReducer from './tasksReducer';
import FilterFunction from './types/FilterFunction.type';

import Task from './types/Task.interface';
import TaskAction from './types/TaskAction.type';

type TasksContextType = Task[];

export const TasksContext = createContext<TasksContextType>([]);
export const TasksDispatchContext = createContext<React.Dispatch<TaskAction> | null>(null);

const DATA = JSON.parse(localStorage.getItem('tasks') || '') || [];

export function TasksProvider({children} : {[key:string]: JSX.Element}) {
  const [tasks, dispatch] = useReducer(tasksReducer, DATA);
  
  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useFilterTasks(filter: FilterFunction) {
  let tasks = useContext(TasksContext);
  const taskList: Task[] = tasks
    .filter(filter);
  return taskList
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}