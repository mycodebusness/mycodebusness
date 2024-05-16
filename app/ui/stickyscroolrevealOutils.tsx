"use client";
import React from "react";
import { StickyScroll } from "./sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Calculatrice",
    description:
      "Ce projet vous plongera dans le monde de la programmation en vous apprenant à concevoir une calculatrice interactive. Vous développerez des compétences en logique de programmation, en manipulation d'interface utilisateur et en gestion des opérations mathématiques. Grâce à cette expérience pratique, vous renforcerez votre compréhension des concepts fondamentaux de la programmation et vous acquerrez une précieuse expertise dans le développement d'applications interactives.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Une calculatrice
      </div>
    ),
  },
  {
    title: "Gestion des dépenses",
    description:
      "Dans ce projet, vous apprendrez à créer une application de gestion des dépenses qui vous permettra de suivre et d'analyser vos finances personnelles. Vous développerez des compétences en développement d'applications web, en gestion de bases de données et en analyse financière. En concevant cette application, vous acquerrez une compréhension approfondie des principes de la gestion financière et vous serez en mesure d'appliquer vos connaissances pour prendre des décisions éclairées en matière de dépenses et d'économies.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/nft-dashboard-art-0.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Liste des tâches à faire",
    description:
      "Ce projet vous initiera à la création d'une liste de tâches interactive qui vous aidera à organiser et à gérer vos activités quotidiennes. En développant cette application, vous renforcerez vos compétences en développement web, en conception d'interfaces utilisateur et en gestion de données. Vous apprendrez à créer des fonctionnalités de glisser-déposer, des rappels automatisés et des filtres de recherche pour une expérience utilisateur optimale. Grâce à cette expérience pratique, vous améliorerez votre productivité et votre capacité à gérer efficacement vos tâches.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Liste des tâches à faire
      </div>
    ),
  },
  {
    title: "Bible",
    description:
      "Plongez dans l'étude des Écritures avec ce projet qui vous permettra de créer une plateforme d'étude biblique interactive. Vous développerez des compétences en développement web, en gestion de contenu et en recherche textuelle. En concevant cette plateforme, vous serez en mesure de parcourir les différentes versions de la Bible, d'accéder à des commentaires théologiques et d'annoter vos passages préférés. Cette expérience pratique vous aidera à approfondir votre compréhension des Écritures et à développer votre spiritualité.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Une Bible
      </div>
    ),
  },
  {
    title: "Portfolio",
    description:
      "Dans ce projet, vous apprendrez à créer un portfolio en ligne qui mettra en valeur vos compétences et vos réalisations professionnelles. Vous développerez des compétences en conception web, en développement front-end et en stratégies de marketing personnel. En concevant votre portfolio, vous apprendrez à choisir les meilleures pièces de votre travail, à les présenter de manière attrayante et à les promouvoir efficacement auprès des employeurs potentiels. Grâce à cette expérience pratique, vous serez en mesure de créer une présence en ligne professionnelle qui vous démarquera sur le marché du travail.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Un Portfolio
      </div>
    ),
  },
  {
    title: "Site de publication de l'horaire",
    description:
      "Ce projet vous guidera dans la création d'un site de publication d'horaires interactif pour une gestion efficace des emplois du temps. Vous développerez des compétences en développement web, en conception d'interfaces utilisateur et en gestion de bases de données. En construisant ce site, vous apprendrez à créer des calendriers dynamiques, à gérer les horaires des événements et à automatiser les notifications. Cette expérience pratique vous permettra de simplifier la planification des activités et d'améliorer la communication au sein de votre communauté.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Un Site de publication de l&apos;horaire
      </div>
    ),
  },
  {
    title: "Blog de discussion",
    description:
      "Dans ce projet, vous apprendrez à créer un blog de discussion interactif qui favorisera l'échange d'idées et le partage d'informations. Vous développerez des compétences en développement web, en gestion de contenu et en promotion en ligne. En concevant ce blog, vous serez en mesure de créer des articles, de gérer les commentaires des utilisateurs et de promouvoir le contenu sur les réseaux sociaux. Grâce à cette expérience pratique, vous développerez vos compétences en communication écrite, en marketing de contenu et en construction de communauté en ligne.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Un Blog de discussion
      </div>
    ),
  },
  {
    title: "Site e-commerce",
    description:
      "Ce projet vous enseignera les bases du commerce électronique en vous guidant dans la création d'un site de vente en ligne. Vous développerez des compétences en développement web, en conception d'interfaces utilisateur et en gestion des transactions en ligne. En construisant ce site, vous apprendrez à présenter vos produits de manière attrayante, à gérer les commandes des clients et à sécuriser les paiements en ligne. Grâce à cette expérience pratique, vous serez en mesure de lancer votre propre entreprise en ligne et de développer vos compétences en entrepreneuriat numérique.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Un Site e-commerce
      </div>
    ),
  },
  {
    title: "Gestion des anniversaires",
    description:
      "Dans ce projet, vous apprendrez à créer une application de gestion des anniversaires pour suivre et célébrer les occasions spéciales. Vous développerez des compétences en développement d'applications, en gestion de bases de données et en communication client. En concevant cette application, vous serez en mesure de créer des rappels d'anniversaire, de gérer les contacts des utilisateurs et d'envoyer des messages personnalisés. Cette expérience pratique vous permettra de renforcer vos relations personnelles et de cultiver un sentiment de communauté avec vos proches.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        La Gestion des anniversaires
      </div>
    ),
  },
  {
    title: "Messagerie instantanée",
    description:
      "Ce projet vous initiera à la création d'une application de messagerie instantanée qui vous permettra de communiquer en temps réel avec vos amis et vos collègues. Vous développerez des compétences en développement web, en gestion de données et en sécurité informatique. En construisant cette application, vous apprendrez à créer des salons de discussion, à partager des fichiers multimédias et à chiffrer les messages pour protéger la vie privée des utilisateurs. Grâce à cette expérience pratique, vous serez en mesure de développer des applications de communication modernes et sécurisées.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        La Messagerie instantanée
      </div>
    ),
  },
  {
    title: "Test équipement réseau",
    description:
      "Dans ce projet, vous apprendrez à concevoir un outil de test d'équipement réseau pour évaluer et optimiser les performances de votre infrastructure informatique. Vous développerez des compétences en réseaux informatiques, en développement logiciel et en gestion de projet. En construisant cet outil, vous serez en mesure de tester la vitesse de connexion, de surveiller le trafic réseau et de diagnostiquer les problèmes de performance. Cette expérience pratique vous aidera à améliorer la fiabilité et la sécurité de votre réseau informatique.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Le Test équipement réseau
      </div>
    ),
  },
  {
    title: "Gestion de l'ISCI",
    description:
      "Ce projet vous guidera dans la création d'un système de gestion pour une institution académique, vous permettant de gérer efficacement les ressources et les activités de l'institution. Vous développerez des compétences en développement logiciel, en gestion de bases de données et en analyse des besoins des utilisateurs. En concevant ce système, vous serez en mesure de créer des profils d'utilisateur, de gérer les inscriptions aux cours et de générer des rapports sur les performances des étudiants. Cette expérience pratique vous aidera à améliorer l'efficacité et la transparence de l'administration académique.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        La Gestion de l&apos;ISCI
      </div>
    ),
  },
  {
    title: "Gestion des stocks",
    description:
      "Ce projet vous apprendra à créer une application de gestion des stocks pour suivre et gérer les inventaires de produits. Vous développerez des compétences en développement d'applications, en gestion de bases de données et en analyse des données. En concevant cette application, vous serez en mesure de créer des fiches produit, de gérer les entrées et sorties de stock et de générer des rapports d'inventaire. Cette expérience pratique vous permettra d'optimiser la gestion des stocks et de maximiser la rentabilité de votre entreprise.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        La Gestion des stocks
      </div>
    ),
  },
  {
    title: "Gestion location salle de fête",
    description:
      "Dans ce projet, vous apprendrez à créer un système de réservation de salles de fête pour gérer les locations d'espaces événementiels. Vous développerez des compétences en développement d'applications, en gestion de bases de données et en expérience utilisateur. En construisant ce système, vous serez en mesure de gérer les calendriers de disponibilité, de traiter les réservations des clients et de collecter les paiements en ligne. Cette expérience pratique vous permettra de simplifier la gestion des locations de salles de fête et d'offrir une expérience client exceptionnelle.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        La Gestion location salle de fête
      </div>
    ),
  },
  {
    title: "Encore plus",
    description:
      "Accedez aux parametres pour spécifier vos propres projets, on ne sait jamais, peut être vou n'êtes pas le seul à en avoir...",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Encore plus !!!
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  );
}
