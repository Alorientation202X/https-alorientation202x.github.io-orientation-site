import React from "react";
import questions from "./components/questions"; // Le fichier qui contient toutes les questions
import "./TestRiasec.css"; // Optionnel pour un peu de style
import Results from './components/Results';

const TestRiasec = ({ handleAnswer }) => {
  return (
    <div className="test-container">
      <h2>Test RIASEC</h2>
      {Object.entries(questions).map(([type, typeQuestions]) => (
        <div key={type} className="type-section">
          <h3>{type}</h3>
          {typeQuestions.map((q, index) => (
            <div key={index} className="question-block">
              <p>{q}</p>
              {[0, 1, 2].map((val) => (
                <button
                  key={val}
                  onClick={() => handleAnswer(type, val)}
                  className="note-button"
                >
                  {val}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
if (isFinished) {
  return <Results scores={scores} />;
}

export default TestRiasec;

