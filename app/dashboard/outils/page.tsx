import { MeteorsDemo } from "@/app/ui/meteors";
import { StickyScrollRevealDemo as StickyScrollRevealDemoProjets } from "@/app/ui/stickyScroolReveal";
import { StickyScrollRevealDemo } from "@/app/ui/stickyscroolrevealOutils";
import React from "react";
import { IoLogoFigma } from "react-icons/io5";
import { FaInternetExplorer } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaChrome } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
declare type meteor = {
  title: string;
  description: string;
  icon: string;
  testButton?: string;
  svg?: any;
}[];
const projects: meteor = [
  {
    title: "Calculatrice",
    description:
      "Avec ce projet, vous apprendrez à créer une calculatrice interactive, perfectionnant vos compétences en programmation et en conception d'interfaces utilisateur.",
    icon: "🧮",
  },

  {
    title: "Gestion des dépenses",
    description:
      "Avec ce projet, vous apprendrez à développer une application de suivi financier, améliorant votre compréhension des bases de données et de la gestion de projet.",
    icon: "💰",
  },
  {
    title: "Liste des tâches à faire",
    description:
      "Avec ce projet, vous apprendrez à concevoir une liste de tâches interactive, consolidant vos compétences en développement web et en organisation personnelle.",
    icon: "📜",
  },
  {
    title: "Bible",
    description:
      "Avec ce projet, vous apprendrez à créer une plateforme d'étude biblique, enrichissant votre compréhension des technologies web et des textes sacrés.",
    icon: "📖",
  },
  {
    title: "Portfolio",
    description:
      "Avec ce projet, vous apprendrez à construire un portfolio en ligne, affinant votre sens du design et de la présentation professionnelle.",
    icon: "✍️",
  },
  {
    title: "Site de publication de l'horaire",
    description:
      "Avec ce projet, vous apprendrez à développer un site d'horaire interactif, améliorant vos compétences en développement web et en gestion de données.",
    icon: "🧑‍🏫",
  },
  {
    title: "Blog de discussion",
    description:
      "Avec ce projet, vous apprendrez à créer un blog interactif, renforçant vos compétences en développement web et en communication digitale.",
    icon: "🤝",
  },
  {
    title: "Site e-commerce",
    description:
      "Avec ce projet, vous apprendrez à construire une plateforme de commerce électronique, développant vos compétences en marketing en ligne et en gestion des transactions.",
    icon: "💵",
  },
  {
    title: "Gestion des anniversaires",
    description:
      "Avec ce projet, vous apprendrez à développer une application de gestion d'anniversaires, consolidant vos compétences en développement d'applications et en gestion de données.",
    icon: "🎂",
  },
  {
    title: "Messagerie instantanée",
    description:
      "Avec ce projet, vous apprendrez à créer une application de messagerie instantanée, améliorant vos compétences en développement d'applications web et en temps réel.",
    icon: "📧",
  },
  {
    title: "Test équipement réseau",
    description:
      "Avec ce projet, vous apprendrez à concevoir un outil de test d'équipement réseau, approfondissant vos connaissances en réseaux informatiques et en diagnostic.",
    icon: "🛜",
  },
  {
    title: "Gestion de l'ISCI",
    description:
      "Avec ce projet, vous apprendrez à développer un système de gestion pour une institution académique, perfectionnant vos compétences en développement logiciel et en gestion de projet.",
    icon: "🏫",
  },
  {
    title: "Gestion des stocks",
    description:
      "Avec ce projet, vous apprendrez à créer une application de gestion des stocks, renforçant vos compétences en développement d'applications et en gestion d'inventaire.",
    icon: "🏬",
  },
  {
    title: "Gestion location salle de fête",
    description:
      "Avec ce projet, vous apprendrez à développer un système de réservation de salles de fête, améliorant vos compétences en développement d'applications et en gestion événementielle.",
    icon: "🏟️",
  },
  {
    title: "Encore plus",
    description:
      "Accedez aux parametres pour spécifier vos propres projets, on ne sait jamais, peut être vou n'êtes pas le seul à en avoir...",
    icon: "🪶",
  },
];
const outils: meteor = [
  {
    title: "Vs Code",
    description:
      "Visual Studio Code est un éditeur de code source développé par Microsoft, connu pour sa légèreté, sa rapidité et sa richesse en fonctionnalités. Avec Vs Code, les développeurs peuvent travailler sur différents langages de programmation, bénéficier de la coloration syntaxique, des suggestions intelligentes, et de l'intégration de Git pour le contrôle de version.",
    icon: "",
    svgicon: <VscVscode />,
  },
  {
    title: "Google Chrome",
    description:
      "Google Chrome est un navigateur web très populaire développé par Google. Il est réputé pour sa rapidité, sa stabilité et ses fonctionnalités avancées telles que la synchronisation des données entre les appareils, la gestion des onglets et des extensions. Chrome offre une expérience de navigation fluide et sécurisée.",
    icon: "",
    svgicon: <FaChrome />,
  },
  {
    title: "Carnet et stylo",
    description:
      "Un carnet et un stylo sont des outils traditionnels mais indispensables pour prendre des notes, esquisser des idées, ou faire des croquis. Ils offrent une liberté créative et une flexibilité que les outils numériques ne peuvent pas toujours reproduire, ce qui en fait des compagnons idéaux pour la pensée créative.",
    icon: "📒",
  },
  {
    title: "Ordinateur",
    description:
      "Un ordinateur est un outil essentiel pour la plupart des tâches informatiques modernes. Que ce soit pour travailler, étudier, créer, ou se divertir, un ordinateur offre une puissance de traitement et une polyvalence inégalées. Des ordinateurs portables aux ordinateurs de bureau, il existe une variété d'options pour répondre aux besoins de chacun.",
    icon: "",
    svgicon: <MdComputer />,
  },
  {
    title: "Connexion internet",
    description:
      "Une connexion internet fiable est indispensable dans le monde connecté d'aujourd'hui. Elle permet l'accès à une multitude de ressources en ligne telles que les sites web, les services de streaming, les réseaux sociaux, et les applications cloud. Une connexion internet rapide et stable améliore la productivité et enrichit l'expérience utilisateur.",
    icon: "",
    svgicon: <FaInternetExplorer />,
  },
  {
    title: "Figma",
    description:
      "Figma est une plateforme de design d'interface utilisateur basée sur le cloud, qui permet la collaboration en temps réel entre les designers et les développeurs. Avec Figma, les équipes peuvent créer des maquettes interactives, des prototypes, et des interfaces utilisateur pour une variété de plateformes, le tout dans un environnement intuitif et facile à utiliser.",
    icon: "",
    svgicon: <IoLogoFigma />,
  },
];
function Page() {
  return (
    <>
      <h2 className="text-2xl font-bold p-4">Projets du groupe</h2>
      <div className="p-1.5 gap-4 relative grid grid-cols-1 mx-6 md:grid-cols-2 lg:grid-cols-3 md:mx-3 lg:mx-0">
        {projects.map(({ icon, title, description }) => (
          <MeteorsDemo
            key={title}
            description={description}
            icon={icon}
            title={title}
          />
        ))}
      </div>
      <h2 className="text-2xl font-bold p-4">Outils à utiliser</h2>
      <div className="p-1.5 gap-4 relative grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 md:mx-3 lg:mx-0">
        {outils.map(({ icon, title, description, svgicon }) => (
          <MeteorsDemo
            key={title}
            description={description}
            icon={icon}
            title={title}
            svgicon={svgicon ? svgicon : null}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
