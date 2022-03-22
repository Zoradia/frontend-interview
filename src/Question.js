import Choice from "./Choice";

const Question = ({ question, handleChange, selected}) => (
  <div>
    <p>{question.text}</p>
    <div className="choices" onChange={handleChange}>
      {question.choices.map((choice) => {
        return (
          <Choice
            name={question.id}
            value={choice.name}
            label={choice.label}
            key={choice.name}
            checked={selected.includes(choice.name)}
          />
        );
      })}
    </div>
  </div>
);

export default Question;
