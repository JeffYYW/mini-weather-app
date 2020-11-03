import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledSearch = styled.button`
  padding: 16px;
  background-color: ${ props => props.theme.colors.grey };
  color: ${ props => props.theme.colors.white };
  font-size: ${ props => props.theme.fonts.base };
  border: none;
`;

const StyledGeo = styled.button`
  background-color: ${ props => props.theme.colors.grey };
  color: ${ props => props.theme.colors.white };
  font-size: ${ props => props.theme.fonts.base };
  padding: 16px;
  border: none;
`;

const ButtonsContainer = ({ getCurrentLocationData, setSearchModalShown }) => {
  return(
    <StyledContainer>
      <StyledSearch onClick={() => setSearchModalShown(true)}>
        Search Here
      </StyledSearch>
      <StyledGeo onClick={getCurrentLocationData}>
        Geo
      </StyledGeo>
    </StyledContainer>
  )
}

export default ButtonsContainer;
