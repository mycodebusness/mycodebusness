import React from "react";
import "./timeline.css";
import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "plan d'étude",
};
function Page() {
  return (
    <>
      <h2 className="text-2xl font-bold p-4">Plan d&apos;étude</h2>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Tout
                    <br />
                    Débute
                    <br />
                    Par :
                  </h4>
                </div>
              </li>
              <li>
                <div className="timeline-image text-center">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive w-full h-full object-cover"
                    src="/ordinateur.webp"
                    alt="Clavier svg"
                  />{" "}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      Le clavier et la souris
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Avant de plonger dans le monde de la programmation, il est
                      essentiel de maîtriser les outils de base de
                      l&apos;interaction avec l&apos;ordinateur : le clavier et
                      la souris. Comprendre leur fonctionnement et les
                      raccourcis courants est la première étape vers une
                      utilisation efficace de la technologie.
                    </p>
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Quelques jours à une semaine
                    </h4>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/HTML5.svg"
                    alt="Html5 svg logo"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      HTML
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      L&apos;HTML est le langage de balisage standard pour la
                      création de pages web. Apprendre l&apos;HTML permet de
                      structurer le contenu d&apos;un site web de manière
                      sémantique, facilitant ainsi la compréhension et
                      l&apos;accessibilité.
                    </p>{" "}
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : 2 semaines à 1 mois
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/CSS3_logo.svg"
                    alt="CSS3 svg logo"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      CSS et Tailwind CSS
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      CSS est utilisé pour styliser et mettre en forme les
                      éléments HTML, tandis que Tailwind CSS est un framework
                      CSS utilitaire qui accélère le processus de développement
                      en fournissant des classes prédéfinies pour les styles
                      courants. Ensemble, ils permettent de créer des interfaces
                      web esthétiques et responsives.
                    </p>{" "}
                    <h4 className="subheading">
                      Temps : Trois semaines à deux mois
                    </h4>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/JavaScript_logo_2.svg"
                    alt="Javascript SVg Logo"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      JavaScript
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      JavaScript est le langage de programmation incontournable
                      pour le développement web. Il est utilisé pour ajouter de
                      l&apos;interactivité aux pages web, manipuler le contenu
                      dynamiquement et créer des applications web complexes.
                    </p>
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Deux à trois mois
                    </h4>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image bg-white">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive bg-white h-full w-full object-cover"
                    src="/React-icon.svg"
                    alt="ReactJs svg logo"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      React
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      React est une bibliothèque JavaScript populaire pour la
                      création d&apos;interfaces utilisateur interactives. En
                      utilisant un modèle de composants réutilisables, React
                      permet de construire des applications web modulaires et
                      performantes.
                    </p>{" "}
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Trois à quatre mois
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/Web-browser.svg"
                    alt="programmation web logo svg"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      Programmation Web
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      La programmation web englobe l&apos;ensemble des
                      compétences nécessaires pour développer des sites web
                      dynamiques et fonctionnels, en utilisant les langages et
                      les technologies mentionnés précédemment. Cela inclut la
                      gestion des bases de données, la sécurité web, et le
                      déploiement sur des serveurs.
                    </p>{" "}
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Six mois à un an
                    </h4>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/computer.svg"
                    alt=""
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      Programmation Desktop
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      La programmation desktop avec Electron.js permet de créer
                      des applications de bureau multiplateformes en utilisant
                      les technologies web (HTML, CSS et JavaScript).
                      Electron.js offre la possibilité de construire des
                      applications puissantes avec des fonctionnalités natives,
                      tout en utilisant des compétences web existantes.
                    </p>{" "}
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Six mois à un an
                    </h4>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <Image
                    width={170}
                    height={170}
                    className="img-circle img-responsive"
                    src="/Tango_Phone.svg"
                    alt="mobile svg logo"
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4 className="font-bold text-xl text-white mb-4 relative ">
                      Programmation Mobile
                    </h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      La programmation mobile avec React Native permet de
                      développer des applications mobiles natives pour iOS et
                      Android en utilisant JavaScript et React. En partageant
                      une grande partie du code entre les deux plateformes,
                      React Native offre une approche efficace pour le
                      développement d&apos;applications mobiles
                      multiplateformes.
                    </p>{" "}
                    <h4 className="bg-slate-800 rounded-md text-sm mb-2 px-1">
                      Temps : Un an à deux ans
                    </h4>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    La fin
                    <br />
                    de
                    <br />
                    tout!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* timeline-inverted */
}
export default Page;
