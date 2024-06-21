import { useTasks, useFilterTasks } from '../TasksContext';
import TaskCounter from "./TaskCounter";
import Task from "./Task";

import FilterFunction from '../types/FilterFunction.type'

type TaskContainerProps = {
  selectedFilter: FilterFunction
}

function TaskContainer({ selectedFilter }: TaskContainerProps) {
  const tasks = useTasks();
  const taskList = useFilterTasks(selectedFilter);
    
  return (
    <>
      <TaskCounter taskNumber={taskList.length} />
      {
        taskList.length > 0 ? (
          <ul className="todo-list stack-large list-container">
            {taskList.map(task => (
              <Task
                task={task}
                key={task.id}
              />
            ))}
          </ul>
        ) : (
          <h3 className='empty-state'>--- Nessun task nella lista ---</h3>
        )
      }
    </>
  );
}

export default TaskContainer;
