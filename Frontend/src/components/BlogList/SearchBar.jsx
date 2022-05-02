import React from 'react'
import './BlogList.css';

const SearchBar = ({ value, handleSearchKey, formSubmit }) => {
  return (
    <div className="searchBar-wrap">
        <form onSubmit={formSubmit}>
            <input 
                type="text" 
                onChange={handleSearchKey}
                placeholder='Search by category' 
                value={value}
            />
            <button>Go</button>
        </form>
        <br />
    </div>
  )
}

export default SearchBar;