import React from 'react';
import styled from 'styled-components';
import { getLocationData } from '../utils/utils'

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: ${ props => props.theme.fonts.base };
`

const ListItem = styled.li`
  padding: 18px 8px;
  margin: 8px 0;
  
  &:hover,
  &:focus {
    outline: 1px solid ${props => props.theme.colors.grey};
    cursor: pointer;
  }
`

const LocationsList = ({ locationsList, setLocationData, setSearchModalShown}) => {

  const handleLocationClick = async (id) => {
    let location = await getLocationData(id);
    setLocationData(location);
    setSearchModalShown(false);
  }

  return(
    <ListContainer>
      {locationsList.map((item, index) => (
      <ListItem
        key={index}
        data-id={item.woeid}
        onClick={() => handleLocationClick(item.woeid)}
      >
        {item.title}
      </ListItem>
      ))}
    </ListContainer>
  )
  
  
}

export default LocationsList;
