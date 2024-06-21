import FilterButton from "./FilterButton";

import Filters from '../types/Filters.type';
import Filter from '../types/Filter.type';

type FilterButtonListProps = {
  filters: Filters,
  filter: Filter,
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
}

function FilterButtonList({filters, filter, setFilter}: FilterButtonListProps) {
  const filterButtons = Object.keys(filters).map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      handleClick={setFilter}
    />
  ));
  
  return (
    <div className="filters btn-group stack-exception">
      <strong>Filtra:</strong> 
      { filterButtons }
    </div>
  )
}

export default FilterButtonList;