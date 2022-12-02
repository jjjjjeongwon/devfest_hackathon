import React from 'react';
import styled from 'styled-components';

const ResultButton = () => {
  return <CheckResult>Next &gt;</CheckResult>;
};

const CheckResult = styled.button`
  width: 30%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  margin-top: 30px;
  border-radius: 10px;
  background-color: mediumseagreen;
  align-items: center;
  justify-content: center;
  display: flex;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #dcf6fc;
  }
`;

export default ResultButton;
