import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
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
        <h1>Contactez-nous</h1>
        <p style={{ maxWidth: '600px', fontSize: '1.2rem' }}>
          Pour toute question, suggestion ou besoin d’accompagnement, vous pouvez nous joindre à l’adresse :
        </p>
        <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '1.1rem' }}>
          razandry.nant@gmail.com<br />
          032 05 702 79
        </p>
      </div>
    </Layout>
  );
};

export default Contact;


