const suggestions = {
  Réaliste: {
    metiers: [
      "Mécanicien",
      "Technicien en bâtiment",
      "Conducteur de travaux",
      "Agriculteur",
      "Électricien",
    ],
    ecoles: {
      france: [
        "Lycée professionnel",
        "CFA (Centre de Formation des Apprentis)",
        "IUT Génie Civil",
        "AFPA",
      ],
      madagascar: [
        "Institut National des Sciences et Techniques Nucléaires (INSTN)",
        "Centre de Formation Professionnelle Mahamasina",
        "École Supérieure Polytechnique d’Antananarivo",
      ],
    },
    competences: [
      "Habileté manuelle",
      "Travail en extérieur",
      "Esprit pratique",
    ],
    environnements: ["Chantiers", "Ateliers", "Sites industriels"],
    personnalites: [
      {
        nom: "Thomas Edison",
        description: "Inventeur, passionné par l’expérimentation",
      },
    ],
    formations: [
      {
        nom: "Technicien en électricité",
        url: "https://www.afpa.fr/formations/technicien-electricien",
      },
      {
        nom: "MOOC Agroécologie",
        url: "https://mooc.inrae.fr/",
      },
    ],
  },

  Investigateur: {
    metiers: [
      "Chercheur",
      "Médecin",
      "Biologiste",
      "Statisticien",
      "Informaticien",
    ],
    ecoles: {
      france: [
        "Université",
        "École Polytechnique",
        "ENS",
        "Faculté de Médecine",
      ],
      madagascar: [
        "Faculté des Sciences (Université d’Antananarivo)",
        "ISPM",
        "Institut Pasteur Madagascar",
      ],
    },
    competences: [
      "Esprit analytique",
      "Résolution de problèmes",
      "Sens de l’observation",
    ],
    environnements: ["Laboratoires", "Universités", "Centres de recherche"],
    personnalites: [
      {
        nom: "Marie Curie",
        description: "Pionnière de la science moderne",
      },
    ],
    formations: [
      {
        nom: "Introduction à la Data Science (Coursera)",
        url: "https://www.coursera.org/learn/data-science",
      },
      {
        nom: "Biologie pour tous (FUN MOOC)",
        url: "https://www.fun-mooc.fr/",
      },
    ],
  },

  Artistique: {
    metiers: [
      "Designer",
      "Graphiste",
      "Comédien",
      "Photographe",
      "Musicien",
      "Architecte",
    ],
    ecoles: {
      france: ["ENSAD", "Beaux-Arts", "Gobelins", "École Boulle"],
      madagascar: [
        "IS'Art Galerie",
        "École Nationale des Arts",
        "École de Design Antananarivo",
      ],
    },
    competences: ["Créativité", "Sens esthétique", "Originalité"],
    environnements: ["Studios", "Théâtres", "Ateliers créatifs"],
    personnalites: [
      {
        nom: "Frida Kahlo",
        description: "Artiste iconique et engagée",
      },
    ],
    formations: [
      {
        nom: "MOOC Design Graphique (FUN MOOC)",
        url: "https://www.fun-mooc.fr/fr/cours/design-graphique/",
      },
      {
        nom: "Cours d’illustration (Domestika)",
        url: "https://www.domestika.org/",
      },
    ],
  },

  Social: {
    metiers: [
      "Éducateur spécialisé",
      "Conseiller d’orientation",
      "Infirmier",
      "Travailleur social",
      "Animateur socioculturel",
    ],
    ecoles: {
      france: ["IRTS", "IFSI", "Université de psychologie", "INSHEA"],
      madagascar: [
        "Institut de Formation en Travail Social (IFTS)",
        "Université de Fianarantsoa - Département de sociologie",
        "ENIAB",
      ],
    },
    competences: [
      "Écoute",
      "Empathie",
      "Communication interpersonnelle",
    ],
    environnements: ["Écoles", "Hôpitaux", "Centres sociaux"],
    personnalites: [
      {
        nom: "Nelson Mandela",
        description: "Leader engagé pour la justice sociale",
      },
    ],
    formations: [
      {
        nom: "Introduction au travail social",
        url: "https://www.fun-mooc.fr/fr/cours/introduction-travail-social/",
      },
      {
        nom: "Psychologie positive (Coursera)",
        url: "https://www.coursera.org/learn/psychologie-positive",
      },
    ],
  },

  Entreprenant: {
    metiers: [
      "Chef d’entreprise",
      "Commercial",
      "Avocat",
      "Responsable marketing",
      "Chargé de projet",
    ],
    ecoles: {
      france: ["HEC", "Sciences Po", "IAE", "École de commerce"],
      madagascar: [
        "INSCAE",
        "Université d’Antananarivo – Économie",
        "Institut Supérieur d’Entrepreneuriat",
      ],
    },
    competences: ["Leadership", "Prise d’initiative", "Persuasion"],
    environnements: ["Bureaux", "Open space", "Espaces de coworking"],
    personnalites: [
      {
        nom: "Steve Jobs",
        description: "Visionnaire et entrepreneur",
      },
    ],
    formations: [
      {
        nom: "Créer son entreprise (BPI)",
        url: "https://bpifrance-creation.fr/",
      },
      {
        nom: "MOOC Entrepreneuriat (OpenClassrooms)",
        url: "https://openclassrooms.com/fr/courses/entrepreneuriat",
      },
    ],
  },

  Conventionnel: {
    metiers: [
      "Comptable",
      "Secrétaire",
      "Agent administratif",
      "Archiviste",
      "Logisticien",
    ],
    ecoles: {
      france: ["BTS Comptabilité", "IAE", "CNAM", "Greta"],
      madagascar: [
        "INSCAE",
        "CNFPPS",
        "Centre de formation du ministère des finances",
      ],
    },
    competences: ["Organisation", "Méthodologie", "Sens du détail"],
    environnements: ["Bureaux", "Administrations", "Banques"],
    personnalites: [
      {
        nom: "Angela Merkel",
        description: "Organisation et rigueur au service de l’État",
      },
    ],
    formations: [
      {
        nom: "Comptabilité et gestion (OpenClassrooms)",
        url: "https://openclassrooms.com/fr/paths/comptable",
      },
      {
        nom: "MOOC Gestion administrative (FUN)",
        url: "https://www.fun-mooc.fr/fr/cours/gestion-administrative/",
      },
    ],
  },
};

export default suggestions;



