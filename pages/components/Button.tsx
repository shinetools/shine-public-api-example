import React from 'react';
import styled from 'styled-components';

const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 10px 0;
  padding-left: 40px;
  padding-right: 40px;
  border: 0;
  z-index: 1;
  border-radius: 60px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5465fc;
  color: white;
  transition: all 200ms;
  box-shadow: 0 2px 8px 2px rgba(84, 101, 252, 0.2);
  text-decoration: none;
  &:hover {
    background-color: #5e6dfd;
  }
  &:focus {
    outline: 'none';
  }
`;

const Text = styled.span``;

function Button({ text, onClick }) {
  return (
    <Action onClick={onClick}>
      <Text>{text}</Text>
    </Action>
  );
}

export default Button;
