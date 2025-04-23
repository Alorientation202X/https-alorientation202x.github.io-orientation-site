const suggestions = {
  Réaliste: {
    metiers: [
      "Mécanicien",
      "Technicien de maintenance",
      "Chauffeur poids lourd",
      "Plombier",
      "Agriculteur",
      "Électricien",
      "Soudeur"
    ],
    ecoles: {
      france: [
        "AFPA (formations techniques)",
        "Lycée professionnel - Bac Pro Maintenance",
        "Compagnons du Devoir"
      ],
      madagascar: [
        "INTH - Institut National du Tourisme et de l’Hôtellerie",
        "CFP - Centres de Formation Professionnelle",
        "Ecole de Formation Technique Don Bosco"
      ]
    },
    competences: [
      "Habileté manuelle",
      "Endurance physique",
      "Précision",
      "Esprit pratique"
    ],
    environnements: [
      "Ateliers",
      "Chantiers",
      "Extérieur",
      "Environnement technique ou mécanique"
    ],
    personnalites: ["Mike Horn", "Elon Musk (pour l’ingénierie)"],
    formationsEnLigne: [
      "https://openclassrooms.com/fr/paths/152-devenir-technicien-reseau",
      "https://www.udemy.com/topic/mechanics/"
    ]
  },

  Investigateur: {
    metiers: [
      "Chercheur",
      "Biologiste",
      "Statisticien",
      "Développeur",
      "Ingénieur en robotique",
      "Data Analyst"
    ],
    ecoles: {
      france: [
        "Université de Paris (sciences)",
        "INSA",
        "École Polytechnique"
      ],
      madagascar: [
        "ESPA - École Supérieure Polytechnique d’Antananarivo",
        "Université d’Antananarivo - Faculté des Sciences",
        "ISPM"
      ]
    },
    competences: [
      "Analyse",
      "Rigueur scientifique",
      "Résolution de problèmes",
      "Curiosité intellectuelle"
    ],
    environnements: [
      "Laboratoires",
      "Centres de recherche",
      "Bureaux d’études"
    ],
    personnalites: ["Marie Curie", "Stephen Hawking"],
    formationsEnLigne: [
      "https://www.coursera.org/browse/data-science",
      "https://www.khanacademy.org/science"
    ]
  },

  Artistique: {
    metiers: [
      "Designer graphique",
      "Musicien",
      "Photographe",
      "Illustrateur",
      "Scénariste",
      "Styliste"
    ],
    ecoles: {
      france: [
        "ENSAD",
        "Les Gobelins",
        "Beaux-Arts"
      ],
      madagascar: [
        "Ecole Supérieure des Arts et Métiers - Antananarivo",
        "IS’ART Galerie"
      ]
    },
    competences: [
      "Créativité",
      "Sens de l’esthétique",
      "Expression personnelle",
      "Sensibilité artistique"
    ],
    environnements: [
      "Studios",
      "Agences de création",
      "Théâtres",
      "Indépendant"
    ],
    personnalites: ["Banksy", "Beyoncé"],
    formationsEnLigne: [
      "https://www.domestika.org/fr",
      "https://www.skillshare.com/"
    ]
  },

  Social: {
    metiers: [
      "Travailleur social",
      "Psychologue",
      "Infirmier",
      "Enseignant",
      "Conseiller d’orientation",
      "Animateur socio-éducatif"
    ],
    ecoles: {
      france: [
        "IRTS",
        "Écoles de formation en travail social (ASS, EJE)",
        "IFSI (pour infirmiers)"
      ],
      madagascar: [
        "Université d’Antananarivo - FLSH",
        "CNFPPS",
        "Centre Arrupe Madagascar"
      ]
    },
    competences: [
      "Empathie",
      "Communication",
      "Écoute active",
      "Soutien émotionnel"
    ],
    environnements: [
      "Écoles",
      "Centres sociaux",
      "ONG",
      "Structures médicales"
    ],
    personnalites: ["Abbé Pierre", "Mère Teresa"],
    formationsEnLigne: [
      "https://www.fun-mooc.fr/",
      "https://www.openclassrooms.com/fr/paths/68-devenir-educateur-specialise"
    ]
  },

  Entreprenant: {
    metiers: [
      "Entrepreneur",
      "Manager",
      "Commercial",
      "Consultant",
      "Politicien",
      "Chef de projet"
    ],
    ecoles: {
      france: [
        "HEC",
        "ESCP",
        "IAE (Instituts d’Administration des Entreprises)"
      ],
      madagascar: [
        "INSCAE",
        "Université d’Antananarivo - Faculté d’économie",
        "ISCAM"
      ]
    },
    competences: [
      "Leadership",
      "Persuasion",
      "Prise de décision",
      "Esprit d’initiative"
    ],
    environnements: [
      "Startups",
      "Entreprises",
      "Organisations internationales"
    ],
    personnalites: ["Steve Jobs", "Oprah Winfrey"],
    formationsEnLigne: [
      "https://www.udemy.com/topic/entrepreneurship/",
      "https://openclassrooms.com/fr/paths/159-creer-et-developper-une-entreprise"
    ]
  },

  Conventionnel: {
    metiers: [
      "Comptable",
      "Assistant administratif",
      "Gestionnaire de paie",
      "Archiviste",
      "Statisticien"
    ],
    ecoles: {
      france: [
        "CNAM",
        "Écoles de comptabilité",
        "IAE"
      ],
      madagascar: [
        "INSCAE",
        "Université d’Antananarivo - Droit ou Gestion",
        "Université privée Saint Michel"
      ]
    },
    competences: [
      "Organisation",
      "Rigueur",
      "Gestion des données",
      "Fiabilité"
    ],
    environnements: [
      "Bureaux",
      "Institutions publiques",
      "Entreprises privées"
    ],
    personnalites: ["Angela Merkel", "Jacques Chirac (côté organisation)"],
    formationsEnLigne: [
      "https://www.coursera.org/browse/business/accounting",
      "https://www.edx.org/learn/accounting"
    ]
  }
};

export default suggestions;




