// src/pages/Bibliotheques.js
import React from 'react';
import '../styles/bibliotheques.css';
import background from '../assets/background.jpg'; // chemin ajusté

const Bibliotheques = () => {
  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log('Lien cliqué');
  };

  return (
    <div className="bibliotheques-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="bibliotheques-content">
        <h1>📚 Bibliothèque</h1>
        <p>Bienvenue dans la bibliothèque numérique !</p>

        <div className="resource-card">
          <h3>📝 Fiches pratiques</h3>
          <ul>
            <li>
              <a
                href="https://www.canva.com/resumes/templates/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Créer un CV sur Canva
              </a>
            </li>
            <li>
              <a
                href="https://www.canva.com/letters/templates/cover-letters/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Créer une lettre de motivation sur Canva
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>🎥 Vidéos inspirantes</h3>
          <ul>
            <li>
              <a href="#" onClick={handleLinkClick} className="link-style">
                TEDx : Trouver sa voie
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick} className="link-style">
                Parcours de jeunes entrepreneurs
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>🔗 Liens utiles</h3>
          <ul>
            <li>
              <a
                href="https://www.onisep.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                ONISEP (FR)
              </a>
            </li>
            <li>
              <a href="#" onClick={handleLinkClick} className="link-style">
                MOOC orientation (MG)
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>📘 Apprendre à utiliser Canva</h3>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=iaNQXchO0-I"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Tutoriel complet Canva 2024 (YouTube)
              </a>
            </li>
            <li>
              <a
                href="https://lafusee.net/utilisation-canva/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Guide d'utilisation de Canva en 6 étapes (La Fusée)
              </a>
            </li>
            <li>
              <a
                href="https://www.canva.com/fr_fr/decouvrir/conseils-graphisme-debutants/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Conseils et astuces en graphisme pour les débutants (Canva)
              </a>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>🧭 Fiches métiers par profil RIASEC</h3>
          <ul>
            <li>
              <a
                href="https://www.monemploi.com/riasec"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Questionnaire RIASEC et métiers associés (MonEmploi)
              </a>
            </li>
            <li>
              <a
                href="https://www.joinmisfit.com/guide-des-metiers-riasec/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Guide des métiers RIASEC (Misfit)
              </a>
            </li>
            <li>
              <a
                href="https://www.optionmetier.fr/metiers/metiers-riasec/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Métiers par profil RIASEC (Option Métier)
              </a>
            </li>
            <li>
              <a
                href="https://deporientation.free.fr/RechercheRIASEC-ROME/Recherche-ROME-RIASEC_002.php"
                target="_blank"
                rel="noopener noreferrer"
                className="link-style"
              >
                Recherche ROME par profil RIASEC
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bibliotheques;

