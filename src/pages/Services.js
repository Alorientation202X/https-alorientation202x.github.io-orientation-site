import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Service.css';
import background from '../assets/background.jpg';
import '../styles/Form.css';

const dpModules = [
  'Test RIASEC',
  'Roue de vie',
  'Coaching individuel',
  'Ateliers de groupe'
];

const entModules = [
  'Business plan',
  'Marketing',
  'Gestion financière',
  'Leadership',
  'Outils pratiques'
];

const Service = () => {
  const [activeForm, setActiveForm] = useState(null);
  const [formData, setFormData] = useState({ service: '', modules: [], other: '', nom: '', email: '' });

  const openForm = (service) => {
    setActiveForm(service);
    setFormData({ service, modules: [], other: '', nom: '', email: '' });
  };

  const closeForm = () => setActiveForm(null);

  const handleCheckboxChange = (module) => {
    setFormData(prev => {
      const modules = prev.modules.includes(module)
        ? prev.modules.filter(m => m !== module)
        : [...prev.modules, module];
      return { ...prev, modules };
    });
  };

  const handleOtherChange = (e) => {
    const { value } = e.target;
    setFormData(prev => ({ ...prev, other: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_xkhsxts',
      'template_7w16z0b',
      {
        service: formData.service,
        modules: formData.modules.join(', '),
        other: formData.other,
        user_name: formData.nom,
        user_email: formData.email
      },
      'N0Y3QGVgu0DAmWEVQ'
    ).then(
      (result) => {
        console.log('Email envoyé: ', result.text);
        alert(`Merci pour votre inscription à ${formData.service} !`);
        closeForm();
      },
      (error) => {
        console.error('Erreur lors de l\'envoi:', error.text);
        alert('Échec de l’envoi. Veuillez réessayer plus tard.');
      }
    );
  };

  return (
    <div className="service-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="service-content">
        <h1>💼 Nos Services</h1>

        <section className="service-section">
          <h2>
            <button className="service-btn" onClick={() => openForm('Développement personnel')}>🌱 Développement personnel / Coaching de vie</button>
          </h2>
          <p>
            Accompagnement pour mieux se connaître, renforcer la confiance en soi, clarifier ses objectifs de vie.
          </p>
        </section>

        <section className="service-section">
          <h2>
            <button className="service-btn" onClick={() => openForm('Formation entrepreneuriat')}>🚀 Formation en entrepreneuriat</button>
          </h2>
          <p>
            Tu as une idée ou un rêve d'entreprendre ? Cette formation te guide de l'idée jusqu'à la réalisation !
          </p>
        </section>

        {activeForm && (
          <div className="form-overlay">
            <form className="service-form" onSubmit={handleSubmit}>
              <h3>Inscription: {formData.service}</h3>

              <div className="field-group">
                <label>Nom :</label>
                <input type="text" name="nom" value={formData.nom} onChange={handleInputChange} required />
              </div>
              <div className="field-group">
                <label>Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              <div className="modules-list">
                <p>Sélectionnez les modules souhaités :</p>
                {(formData.service === 'Développement personnel' ? dpModules : entModules).map((mod, idx) => (
                  <label key={idx} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.modules.includes(mod)}
                      onChange={() => handleCheckboxChange(mod)}
                    /> {mod}
                  </label>
                ))}
              </div>

              <div className="other-field">
                <label>
                  Autres:
                  <input
                    type="text"
                    placeholder="Précisez..."
                    value={formData.other}
                    onChange={handleOtherChange}
                  />
                </label>
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">Envoyer</button>
                <button type="button" className="cancel-btn" onClick={closeForm}>Annuler</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;


