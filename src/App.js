import { useState } from 'react';
import Question from "./Question";
import questions from "./questions";
import "./App.css";

const App = () => {
  const [selected, setSelected] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [invalidSelection, setinvalidSelection] = useState(false);
  const [validSelection, setvalidSelection] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();

    if (selected.length < 3 || selectedCategories.length < 3) {
      setinvalidSelection(true);
    } else {
      setvalidSelection(true);
    }
  }

  const handleChange = (event) => {
    
    const selectedChoice = event.target.value;
    const questionCategory = event.target.name;

    let updatedSelectedChoice = selected.filter(choice => choice !== selectedChoice);
    let updatedSelectedCategories = selectedCategories.filter(category => category !== questionCategory)

    if (event.target.checked) {
      updatedSelectedChoice.push(selectedChoice);
      updatedSelectedCategories.push(questionCategory);
    }
    setSelected(updatedSelectedChoice);
    setSelectedCategories(updatedSelectedCategories);
  }
 
  return(
    <main className="App">
      <h1 className="App-title">Risk Assessment</h1>
      {invalidSelection === true && <h3 className="invalid">You must select at least one value for each question</h3>}
      {validSelection === true && <h3 className="success">Thank you!</h3>}

      <form onSubmit={submitForm}>
        {questions.map((question) => (
          <Question key={question.id} question={question} handleChange={handleChange} selected={selected}/>
        ))}
        <div> 
          <button type="submit" className="button">Next</button> 
        </div>
      </form>
    </main>
  );
}

export default App;
