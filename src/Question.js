import Choice from "./Choice";

const Question = ({ question }) => (
  <div>
    <p>{question.text}</p>
    <div className="choices">
      {question.choices.map((choice) => {
        return (
          <Choice
            name={question.id}
            value={choice.name}
            label={choice.label}
            key={choice.name}
          />
        );
      })}
    </div>
  </div>
);

export default Question;
