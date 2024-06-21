import Task from './Task.interface';

type TaskAction = 
  {type: 'added', name: string, id: string}
  | {type: 'edited', task: Task}
  | {type: 'deleted', id: string}
  | {type: 'toggled', id: string}

export default TaskAction;