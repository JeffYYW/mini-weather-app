import React from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
  background-color: ${ props => props.theme.colors.secondary };
`;

const SecondaryDisplay = ({children}) => {
  return(
    <DisplayContainer>
      {children}
    </DisplayContainer>
  )
}

export default SecondaryDisplay;
