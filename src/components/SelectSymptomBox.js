import { useState } from 'react';
import CheckBoxSymptom from './CheckBoxSymptom';
import styled from 'styled-components';
import SymptomsList from '../symptomList/SymptomsList';

const SelectSymptomBox = () => {
  const [checkedItems, setCheckedItems] = useState(new Map(
    SymptomsList.map((symptom)=> [symptom, 0]) 
  ));

  const checkedItemHandler = (id, isChecked) => {
      checkedItems.set(id,isChecked);
      setCheckedItems(checkedItems);
  };

  const save = () => {
    let outputObject = {};
    checkedItems.forEach((value, key) => {
      outputObject[key] = value;
    });
    console.log(outputObject);
  }

  return (
    <Container>
      <SelectBoxWrap>
        {SymptomsList.map((symptom, index) => {
          return (
            <CheckBox key={index}>
              <CheckBoxSymptom symptom={symptom} checkedItemHandler={checkedItemHandler}/>
            </CheckBox>
          );
        })}
      </SelectBoxWrap>
      <CheckResult onClick={()=>{save();}}>Next &gt;</CheckResult>;
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectBoxWrap = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const CheckBox = styled.div`
  display: flex;
  max-width: calc(100% / 4);
  width: 100%;
`;

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

export default SelectSymptomBox;
