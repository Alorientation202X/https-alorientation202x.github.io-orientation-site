import React from 'react';
import '../style/Introtest.css';

const Introtest = ({ onStart }) => {
  return (
    <div className="introtest-container">
      <h2>🧭 Bienvenue dans le test RIASEC</h2>
      <p>
        Ce test va t'aider à découvrir ton type de personnalité professionnelle selon la méthode RIASEC :
        <strong> Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel.</strong>
      </p>
      <p>
        Tu répondras à une série de questions réparties en 4 catégories : <strong>Comportement</strong>,
        <strong> Personnalité</strong>, <strong>Valeur</strong>, et <strong>Talents professionnels</strong>.
      </p>
      <p>
        Pour chaque question, indique à quel point tu t’identifies :
        <br />
        <strong>0</strong> (Pas du tout) – <strong>1</strong> (Un peu) – <strong>2</strong> (Tout à fait)
      </p>
      <button className="introtest-btn" onClick={onStart}>🚀 Commencer le test</button>
    </div>
  );
};

export default Introtest;




