import React from 'react';
import styled from 'styled-components';
import SymptomsList from '../symptomList/SymptomsList';

const SelectSymptomBox = () => {
  return (
  <SelectBoxContainer>
        { SymptomsList.map((symptom, index)=> {
          let printSymptom = symptom.replaceAll('_',' ');
          return (
            <CheckBox
              key={index}>
              <SelectDisease>
                  <input id={symptom} type="checkbox"/>{printSymptom}
              </SelectDisease>
          </CheckBox>
          );
        })
      }
    </SelectBoxContainer>
  )
};

const SelectBoxContainer =styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const CheckBox =styled.div`
  display: flex;
  max-width: calc(100% /4);
  width: 100%;
`;

const SelectDisease =styled.span`
  font-size: 19px;
`;

export default SelectSymptomBox;
