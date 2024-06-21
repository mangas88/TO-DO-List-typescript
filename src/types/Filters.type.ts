import Filter from './Filter.type';
import FilterFunction from './FilterFunction.type';

type Filters = {
  [key in Filter]: FilterFunction
}

export default Filters;