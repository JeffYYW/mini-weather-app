import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  height: 100vh;
  background-color: ${ props => props.theme.colors.primary };
  padding: 15px;
`;

const PrimaryDisplay = ({ children }) => {
  return(
    <DisplayContainer>
     {children}
    </DisplayContainer>
  )
}

export default PrimaryDisplay;
