import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import '../styles/TestRiasec.css';

const TestRiasec = ({ onTestComplete }) => {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const totalQuestions = questions.length;
  const navigate = useNavigate();

  const startTest = () => setShowIntro(false);

  const handleAnswer = (score) => {
    const question = questions[currentQuestionIndex];
    const updatedResponses = {
      ...responses,
      [question.id]: { type: question.type, score }
    };
    setResponses(updatedResponses);

    if (currentQuestionIndex + 1 < totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calcul des scores finaux
      const results = calculateResults(updatedResponses);
      // Envoi au composant parent
      onTestComplete(results);
      // Redirection vers la page des résultats avec state
      navigate('/resultats', { state: { results } });
    }
  };

  const calculateResults = (resp) => {
    const scores = {
      Réaliste: 0,
      Investigateur: 0,
      Artistique: 0,
      Social: 0,
      Entreprenant: 0,
      Conventionnel: 0
    };
    Object.values(resp).forEach(({ type, score }) => {
      if (scores.hasOwnProperty(type)) {
        scores[type] += score;
      } else {
        console.warn("Type inconnu détecté :", type);
      }
    });
    return scores;
  };

  const question = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <div className="test-container">
      {showIntro ? (
        <div className="intro-card">
          <h1>🧭 Bienvenue dans le test RIASEC</h1>
          <p>
            Ce test vous aide à mieux connaître votre profil professionnel selon 6 types de
            personnalité : <strong>Réaliste, Investigateur, Artistique, Social, Entreprenant,
            Conventionnel.</strong>
          </p>
          <p>
            Vous allez répondre à {totalQuestions} questions. Pour chaque question,
            choisissez : <strong>0 (Pas du tout) – 1 (Un peu) – 2 (Tout à fait)</strong>.
          </p>
          <button className="start-btn" onClick={startTest}>🚀 Passer le test</button>
        </div>
      ) : (
        <>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progressPercentage}%` }} />
          </div>
          <div className="question-card">
            <h3 className="question-text">{question.question}</h3>
            <div className="response-buttons">
              {[0, 1, 2].map((value) => (
                <button
                  key={value}
                  className={`answer-btn btn-${value}`}
                  onClick={() => handleAnswer(value)}
                >
                  {value}
                </button>
              ))}
            </div>
            <p className="question-counter">
              Question {currentQuestionIndex + 1} / {totalQuestions}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default TestRiasec;



