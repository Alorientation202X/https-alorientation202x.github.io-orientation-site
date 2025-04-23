import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import suggestions from '../data/suggestions';
import motivationMessages from '../data/motivationMessages';
import '../styles/Results.css';
import backgroundImage from '../assets/background.jpg';
import logo from '../assets/logo.png';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Results = () => {
  const { state } = useLocation();
  const results = state?.results;
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({ nom: '', email: '', objet: '', message: '' });

  if (!results || Object.keys(results).length === 0) {
    return <div className="results-container">Aucun résultat trouvé.</div>;
  }

  const sortedTypes = Object.entries(results).sort((a, b) => b[1] - a[1]);
  const bestTypes = sortedTypes.slice(0, 2);

  const handlePrint = () => window.print();

  const handleShare = () => {
    const text = `Mon profil RIASEC est ${bestTypes.map(([type]) => type).join(' & ')} 💡`;
    if (navigator.share) {
      navigator.share({ title: 'Mon profil RIASEC', text });
    } else {
      alert("Partage non pris en charge.");
    }
  };

  const toggleForm = () => setFormVisible(!formVisible);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, email, objet, message } = formData;
    const mailto = `mailto:razandry.nant@gmail.com?subject=${encodeURIComponent(objet)}&body=${encodeURIComponent(`Nom: ${nom}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailto;
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('result-content');
    if (!element) return;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pageWidth - 20;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
    let heightLeft = imgHeight;
    let position = 10;
    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight - 20;
    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - 20;
    }
    pdf.save('resultats-RIASEC.pdf');
  };

  return (
    <div
      id="result-content"
      className="results-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        minHeight: '100vh',
        color: '#fff'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <img src={logo} alt="Logo" style={{ height: '100px', animation: 'spin 10s linear infinite' }} />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.2rem', fontStyle: 'italic' }}>
        🌟 Vous avez terminé ! Voici les deux profils qui vous correspondent le plus :
        {bestTypes.map(([type]) => ` ${type}`).join(' & ')}
      </div>
      <div className="results-flex" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {bestTypes.map(([type, score], idx) => {
          const suggestion = suggestions[type];
          return (
            <div key={type} className="results-card" style={{ backgroundColor: '#000000a0', padding: '1rem', borderRadius: '8px', width: '100%', maxWidth: '500px' }}>
              <h2>🎯 {type} ({score} pts)</h2>
              <p style={{ fontStyle: 'italic' }}>✨ {motivationMessages[type]}</p>
              <div>
                <h3>💼 Métiers</h3>
                <ul>{suggestion.metiers.map((m, i) => <li key={i}>📌 {m}</li>)}</ul>
                <h3>🎓 Écoles France</h3>
                <ul>{suggestion.ecoles.france.map((e, i) => <li key={i}>📘 {e}</li>)}</ul>
                <h3>🎓 Écoles Madagascar</h3>
                <ul>{suggestion.ecoles.madagascar.map((e, i) => <li key={i}>📙 {e}</li>)}</ul>
                <h3>🧠 Compétences</h3>
                <ul>{suggestion.competences.map((c, i) => <li key={i}>✅ {c}</li>)}</ul>
                <h3>🏢 Environnements</h3>
                <ul>{suggestion.environnements.map((env, i) => <li key={i}>🏞️ {env}</li>)}</ul>
                <h3>🌟 Inspirants</h3>
                <ul>{suggestion.personnalites.map((p, i) => <li key={i}>⭐ <strong>{p.nom}</strong> – {p.description}</li>)}</ul>
                <h3>💻 Formations</h3>
                <ul>{suggestion.formations.map((f, i) => <li key={i}><a href={f.url} target="_blank" rel="noopener noreferrer">🖥️ {f.nom}</a></li>)}</ul>
                <p><a href={`https://www.orientation-pour-tous.fr/recherche?text=${type}`} target="_blank" rel="noopener noreferrer" style={{ color: '#00ccff' }}>🔍 Plus de fiches métiers</a></p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button onClick={handlePrint}>Imprimer</button>
        <button onClick={handleShare}>Partager</button>
        <button onClick={toggleForm}>❓ Aide</button>
        <button onClick={handleDownloadPDF}>📄 PDF</button>
      </div>
      {formVisible && (
        <form onSubmit={handleSubmit} style={{ backgroundColor: '#ffffffcc', padding: '1rem', borderRadius: '8px', marginTop: '1rem', maxWidth: '400px', color: '#000' }}>
          <h3>Contact</h3>
          <input type="text" name="nom" placeholder="Nom" value={formData.nom} onChange={handleChange} required style={{ width: '100%', marginBottom: '8px' }} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ width: '100%', marginBottom: '8px' }} />
          <input type="text" name="objet" placeholder="Objet" value={formData.objet} onChange={handleChange} required style={{ width: '100%', marginBottom: '8px' }} />
          <textarea name="message" rows="4" placeholder="Message" value={formData.message} onChange={handleChange} required style={{ width: '100%', marginBottom: '8px' }} />
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Results;













