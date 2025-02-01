import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Css/FilterAndSort.css';

const FilterAndSort = ({ onFilterChange, onSortChange }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isSortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('');

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const toggleSort = () => {
    setSortOpen(!isSortOpen);
  };

  const applySort = (sortValue, label) => {
    setSelectedSort(label);
    setSortOpen(false);
    onSortChange(sortValue);
  };

  const clearSort = () => {
    setSelectedSort('');
    onSortChange('');
  };

  return (
    <div className="filterSortWrapper">
      {/* Filter Button */}
      <button className="filterBtn" onClick={toggleFilter}>
        <FontAwesomeIcon style={{width: "30px", height: "20px", marginBottom: "0px"}} icon={faFilter} className="icon" />
        Filter
      </button>

      {/* Sort Button */}
      <div className="sortDropdownContainer">
        <button className="sortBtn flex align-middle justify-center" onClick={toggleSort}>
          Sort By <FontAwesomeIcon style={{width: "30px", height: "20px", marginBottom: "0px"}} icon={faChevronDown} className="icon" />
        </button>

        {/* Sort Dropdown */}
        {isSortOpen && (
          <div className="sortDropdown">
            <ul>
              <li onClick={() => applySort('priceLowToHigh', 'Price: Low to High')}>Price: Low to High</li>
              <li onClick={() => applySort('priceHighToLow', 'Price: High to Low')}>Price: High to Low</li>
              <li onClick={() => applySort('nameAtoZ', 'Name: A to Z')}>Name: A to Z</li>
              <li onClick={() => applySort('nameZtoA', 'Name: Z to A')}>Name: Z to A</li>
            </ul>
          </div>
        )}
      </div>

      {/* Applied Sort Tag */}
      {selectedSort && (
        <div className="sortTag">
          {selectedSort} 
          <FontAwesomeIcon icon={faTimes} className="clearSort" onClick={clearSort} />
        </div>
      )}

      {/* Filter Modal */}
      {isFilterOpen && (
        <div className="filterModal">
          <div className="modalContent">
            <h3>Select Filters</h3>
            <div className="filterOptions">
              <label><input type="checkbox" value="dogs" /> Dogs</label>
              <label><input type="checkbox" value="cats" /> Cats</label>
              <label><input type="checkbox" value="birds" /> Birds</label>
              <label><input type="checkbox" value="fish" /> Fish</label>
            </div>
            <button className="applyBtn" onClick={toggleFilter}>Apply</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterAndSort;
