import TaskInterface from './Task.interface';

type FilterFunction = ((task: TaskInterface) => boolean);

export default FilterFunction;