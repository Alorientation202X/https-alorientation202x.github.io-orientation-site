import React from 'react';
import Layout from '../components/Layout';
import '../styles/About.css'

const About = () => {
  return (
    <Layout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        color: 'white',
        padding: '30px',
        textAlign: 'center',
        textShadow: '1px 1px 2px black'
      }}>
        <h1>À propos de nous</h1>
        <p style={{ maxWidth: '700px', fontSize: '1.2rem' }}>
          Cette plateforme a été conçue pour accompagner les jeunes dans leur orientation scolaire et professionnelle,
          en mettant à disposition des outils d’évaluation, des conseils personnalisés et des ressources utiles.
        </p>
      </div>
    </Layout>
  );
  
};

export default About;


