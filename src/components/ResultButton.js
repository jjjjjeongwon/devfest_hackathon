import React from 'react';
import styled from 'styled-components';

const ResultButton = () => {

  return (
    <CheckResult>
        Result
    </CheckResult>
  )
}

const CheckResult =styled.button`
    width: 30%;
    height: 20px;
    margin: 30px auto auto;
    border-radius: 5px;
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

export default ResultButton