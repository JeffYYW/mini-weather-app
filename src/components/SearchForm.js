import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
`

const StyledInput = styled.input`
  border: 1px solid ${ props => props.theme.colors.white };
  background-color: ${ props => props.theme.colors.primary };
  color: ${ props => props.theme.colors.white };
  padding: 16px;
  flex: 1;
  margin-right: 12px;
  font-size: ${ props => props.theme.fonts.base };

  &::placeholder {
    color: ${ props => props.theme.colors.grey };
  }
`

const StyledButton = styled.button`
  border: none;
  padding: 17px 22px;
  color: ${ props => props.theme.colors.white };
  background-color: ${ props => props.theme.colors.tertiary };
  flex-shrink: 1;
  font-size: ${ props => props.theme.fonts.base };
`

const SearchForm = ({ 
  locationInput, 
  handleLocationSubmit, 
  handleLocationChange
}) => {
  
  return(
    <StyledForm onSubmit={handleLocationSubmit}>
      <StyledInput
        type="text"
        value={locationInput}
        onChange={handleLocationChange}
        placeholder="search location"
      />
      <StyledButton type="submit">Search</StyledButton>
    </StyledForm>
  )
}

export default SearchForm;