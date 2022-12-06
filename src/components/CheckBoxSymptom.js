import { useState } from 'react';
import styled from 'styled-components';

const CheckBoxSymptom = ({ symptom, checkedItemHandler }) => {

  let printSymptom = symptom.replaceAll('_', ' ');

  const [bChecked, setChecked] = useState(false);
  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(target.id, target.checked?1:0);
  };

  return (
    <SelectDisease>
      <input id={symptom} type="checkbox" checked={bChecked} onChange={(e) => checkHandler(e)}/>
      {printSymptom}
    </SelectDisease>
  );
};

const SelectDisease = styled.span`
  font-size: 19px;
`;

export default CheckBoxSymptom;
