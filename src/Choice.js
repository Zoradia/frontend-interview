import { useState } from 'react';

const Choice = ({ name, value, label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const checkBoxClassHandler = (event) => {
    event.preventDefault();
    console.log("Changing class");

    if (isSelected){
      setIsSelected(false);
    }
    else {
      setIsSelected(true);
    }
  }
  
  return(
    <div className={isSelected ? 'checkbox filled' : 'checkbox'} onChange={checkBoxClassHandler}>
      <label>
        <input
          name={name}
          type="checkbox"
          value={value}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

export default Choice;
