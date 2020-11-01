import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  border: 1px solid red;
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
`;  

const SearchModal = ({ isShown, children}) => {

  return (
    <>
    {isShown ? <ModalContainer>{children}</ModalContainer> : null}
    </>
  )

}

export default SearchModal;