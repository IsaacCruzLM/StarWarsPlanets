import React from 'react';
import FilterByName from './FilterByName';
import FilterByTag from './FilterByTag';
import OrderFilter from './OrderFilter';

function FilterList() {
  return (
    <div className="filterList">
      <p>Filters:</p>
      <FilterByName />
      <FilterByTag />
      <OrderFilter />
    </div>
  );
}

export default FilterList;
