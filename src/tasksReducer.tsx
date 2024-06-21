import Task from './types/Task.interface';
import TaskAction from './types/TaskAction.type';

function tasksReducer(tasks: Task[], action: TaskAction) {
  const {type} = action;
  switch(type) {
    case 'added': {
      return [
        ...tasks, 
        { 
          id: action.id,
          name: action.name,
          completed: false 
        }
      ]
    }
    case 'edited': {
      return tasks.map(task => {
        if(task.id === action.task.id) {
          return action.task
        } else {
          return task
        }
      })
    }
    case 'deleted': {
      return tasks.filter(task => task.id !== action.id)
    }
    case 'toggled': {
      return tasks.map(task => {
        if (task.id === action.id) {
          return {
            ...task, 
            completed: !task.completed
          }
        }
        return task;
      });
    }
    default: {
      throw Error('Azione non riconosciuta: ' + type)
    }
  }
}

export default tasksReducer;