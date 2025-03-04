const titre = "But 1 : Projet 1.";

const intro =
  "Durant un Bachelor Universitaire Technologique, les étudiants ont des projets appelés SAE pour Situation d'Apprentissage et d'Évaluation, qui permettent d'aller vers des démarches plus professionnelles. Notre première SAE avait pour but de contrôler la rotation de moteur via des signaux moins puissants que ceux utilisés pour l'alimentation en puissance des moteurs.";

const content = [
  {
    id: 1,
    titretache: "Familiarisation des outils de mesure électronique.",
    tache:
      "Découverte des différents outils essentiels pour effectuer des projets liés à l'électronique.",
    granddescription:
      "Nous avons d'abord eu des phases d'apprentissage pour comprendre le fonctionnement et l'utilisation des différents outils couramment utilisés en électronique, tels qu'une alimentation stabilisée, un oscilloscope, un générateur de base de fréquence et un multimètre, qui permettent de créer et de mesurer les signaux électroniques.",
    ressource: "Les mises en situation et travaux pratiques de notre professeur d'électronique.",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 2,
  },
  {
    id: 2,
    titretache: "Familiarisation avec les datasheets.",
    tache:
      "Nous avons fait la démarche professionnelle d'utiliser les datasheets des composants.",
    granddescription:
      "Pour comprendre le fonctionnement de notre carte de commande de moteur, nous avons dû apprendre à lire des datasheets pour obtenir des informations sur certains composants.",
    ressource: "Les mises en situation et travaux pratiques de notre professeur d'électronique.",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 5,
  },
  {
    id: 3,
    titretache: "Contrôle d'un moteur via un signal PWM.",
    tache:
      "Pour contrôler notre moteur, la carte de contrôle avait besoin d'un signal spécifique.",
    granddescription:
      "Nous avons appris à créer et utiliser un signal PWM. L'information qu'il contient vient de la proportion de temps entre le temps où la tension est au maximum/minimum. Nous avons ensuite utilisé le matériel de mesure et les cartes électroniques pour contrôler un moteur via un signal que nous fournissions à la carte.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 4,
  },
  {
    id: 4,
    titretache: "Lecture de la vitesse via le capteur rotatif.",
    tache:
      "Pour contrôler un moteur, il est plus pratique de savoir à quelle vitesse il tourne avant de changer cette vitesse.",
    granddescription:
      "Pour comprendre précisément les effets de nos signaux, nous avons utilisé un capteur rotatif pour connaître à quelle vitesse le moteur tournait par rapport aux signaux que nous appliquions.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 1,
  },
  {
    id: 5,
    titretache: "Analyse de la vitesse en fonction du rapport cyclique.",
    tache: "Nous avons appris à lire des résultats électroniques.",
    granddescription:
      "Nous avons ensuite calculé des fréquences et réalisé des courbes dans une démarche scientifique.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 5,
  },
  {
    id: 6,
    titretache: "Test de la limite de l'alimentation.",
    tache:
      "En électronique/électrique, la limitation la plus importante est la consommation d'énergie, notamment de courant.",
    granddescription:
      "Nous avons aussi mesuré la consommation en courant du moteur pour vraiment comprendre comment interagissent entre eux les deux mesures que sont le courant et la tension. Ceci était la finalité de notre premier projet d'électronique.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2020.",
    note: 4,
  },
];

const conclu =
  "Contrôler un moteur était une tâche plutôt simple que nous aurions pu faire en autodidacte via des tutoriels, mais le faire en cours nous a permis de le faire avec un vrai but professionnel.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
