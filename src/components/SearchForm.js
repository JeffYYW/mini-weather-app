import React from 'react';

const SearchForm = ({ 
  locationInput, 
  handleLocationSubmit, 
  handleLocationChange
}) => {
  
  return(
    <form onSubmit={handleLocationSubmit}>
      <input
        type="text"
        value={locationInput}
        onChange={handleLocationChange}
        placeholder="search location"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm;