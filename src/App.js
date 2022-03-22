import Question from "./Question";
import questions from "./questions";
import "./App.css";

const App = () => (
  <main className="App">
    <h1 className="App-title">Risk Assessment</h1>
    <form>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      <div>
        <button type="submit">Next</button>
      </div>
    </form>
  </main>
);

export default App;
