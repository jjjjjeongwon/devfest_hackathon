import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import SymptomsList from '../symptomList/SymptomsList';

const SelectSymptomBox = () => {



  return (
  <SelectBoxContainer>
        { SymptomsList.map((symptom, index)=> {
          return (
            <CheckBox
                key={index}>
            <SelectDisease>
                <input type="checkbox"/>{symptom}
            </SelectDisease>
          </CheckBox>
          );
        })
      }
    </SelectBoxContainer>
  )
};

const SelectBoxContainer =styled.div`
  width: 70%;
  height: 100%;
  background-color: aliceblue;
  margin: 30px auto auto;
  display: flex;
  flex-wrap: wrap;
`;

const CheckBox =styled.div``;

const SelectDisease =styled.span`
  max-width: calc(100% /3);
  width: 100%;
  height: 20px;
  background-color: beige;
  font-size: 12px;
  display: flex;
`;

export default SelectSymptomBox;
