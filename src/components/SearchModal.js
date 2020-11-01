import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  height: 100vh;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  display: flex;
  flex-direction: column;
`;  

const StyledButton = styled.button`
  align-self: flex-end;
  margin-bottom: 16px;
`;

const SearchModal = ({ isShown, setSearchModalShown ,children}) => {

  return (
    <>
    {isShown ? <ModalContainer>
      <StyledButton onClick={() => setSearchModalShown(false)}>Close</StyledButton>
      {children}
      </ModalContainer> : null}
    </>
  )

}

export default SearchModal;