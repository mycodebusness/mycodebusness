"use client";
import { SubmitButton } from "@/app/ui/submit-button";
import React from "react";
// import { createProfileForUser } from "@/app/action";
// import { useRouter } from "next/router";
export declare type User = {
  id: string;
  email: string | null;
  createdAt: Date;
  image: string | null;
  name: string | null;
}[];
export declare type Profile = {
  id: string;
  nom: string;
  postnom: string;
  prenom: string;
  numero: string;
  adresse: string;
  genre: string;
  technologies: string;
  projets: string;
  inspiration: string;
  ambition: string;
  comments: string;
  createdAt: Date;
};
export default function FormParam({
  userId = "",
  profile,
}: {
  userId: string;
  profile: Profile;
}) {
  // const updateUserWithId = createProfileForUser.bind(null, userId);
  const technologies = profile?.technologies?.split(",") || [];
  const [techno, setTechno] = React.useState<string[]>([]);
  const handleChecked = (value: string, cheched?: boolean) => {
    if (cheched) setTechno((val) => [...val, value]);
    else
      setTechno((val) =>
        val.filter((v) => {
          if (v == value) return false;
          return true;
        })
      );
  };
  // updateUserWithId

  return (
    <form className="px-3 mt-3 leading-6">
      <h2 className="text-2xl font-bold py-4">Parametres</h2>
      <div className="border-b border-white/30 pb-8">
        <h3 className="font-semibold text-lg px-3 leading-6 uppercase text-yellow-400">
          Informations personnels
        </h3>
        <p className="pl-4 pt-3 pb-6 text-base leading-6 text-gray-300">
          Completer tous les champs pour permettre à tous de vous identifier !!!
        </p>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="nom" className="block text-base font-semibold">
              Entrer votre Nom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="nom"
                id="nom"
                defaultValue={profile?.nom || ""}
                required
                className="block w-full rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="postnom" className="block text-base font-semibold">
              Entrer votre Postnom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="postnom"
                id="postnom"
                defaultValue={profile?.postnom || ""}
                required
                className="block w-full rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="prenom" className="block text-base font-semibold">
              Entrer votre Prénom
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="prenom"
                id="prenom"
                defaultValue={profile?.prenom || ""}
                required
                className="block w-full rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="numero" className="block text-base font-semibold">
              Entrer votre numéro de téléphone
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="numero"
                id="numero"
                defaultValue={profile?.numero || ""}
                required
                className="block w-full rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="adresse" className="block text-base font-semibold">
              Entrer votre adresse
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="adresse"
                id="adresse"
                defaultValue={profile?.adresse || ""}
                required
                className="block w-full rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="genre" className="block text-base font-semibold">
              Entre votre Genre
            </label>
            <div className="mt-2">
              <select
                id="genre"
                name="genre"
                required
                defaultValue={profile?.genre}
                className="appearance-none block w-full h-9 rounded-md border-0 p-1.5 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="Masculin">Masculin</option>
                <option value="Feminin">Féminin</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white/30 pb-8">
        <h3 className="font-semibold text-lg px-3 mt-2 uppercase text-yellow-400 py-2">
          AMBITIONS
        </h3>
        <div className="sm:col-span-2">
          <label
            htmlFor="ambition"
            className="block text-base font-semibold py-3"
          >
            Qu&apos;est-ce qui t&apos;a poussé à faire l&apos;informatique ?
          </label>
          <div className="mt-2.5">
            <textarea
              name="ambition"
              id="ambition"
              defaultValue={profile?.ambition || ""}
              required
              rows={4}
              placeholder="Pourquoi avais-tu décidé de faire l'informatique? simple plaisir?"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="inspiration"
            className="block text-base font-semibold py-3"
          >
            Qui t&apos;a inspiré à faire l&apos;informatique ?
          </label>
          <div className="mt-2.5">
            <textarea
              name="inspiration"
              id="inspiration"
              defaultValue={profile?.inspiration || ""}
              required
              rows={4}
              placeholder="Ex: mes camarades, Chloé OBRAYANE etc."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="border-b border-white/30 pb-8">
        <h3 className="font-semibold text-lg px-3 mt-2 uppercase text-yellow-400 py-2">
          CHOIX DES TECHNOLOGIES
        </h3>
        <div className="pl-6">
          <fieldset>
            <legend className="block text-base font-semibold pt-3">
              Que veux-tu être en informatique ?
            </legend>
            <div className="mt-6 space-y-6">
              <input
                type="hidden"
                name="technologies"
                id="technologies"
                value={techno?.toString()}
              />
              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="programmmeur"
                    type="checkbox"
                    checked={
                      technologies?.indexOf("Programmeur Généraliste") >= 0
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    defaultValue="Programmeur Généraliste"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label
                    htmlFor="programmmeur"
                    className="block text-sm font-bold"
                  >
                    Un Programmeur Généraliste
                  </label>
                  <p className="text-gray-400">
                    Pour maitrisez la programmation en générale et tous les
                    concepts.
                  </p>
                </div>
              </div>
              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="web"
                    type="checkbox"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    checked={
                      technologies?.indexOf("Developpeur Web") >= 0
                        ? true
                        : false
                    }
                    defaultValue="Developpeur Web"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="web" className="block text-sm font-bold">
                    Un Developpeur Web
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez la Programmation et les Techologies Web.
                  </p>
                </div>
              </div>

              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="mobile"
                    type="checkbox"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    defaultChecked={
                      technologies?.indexOf("Developpeur Mobile") >= 0
                        ? true
                        : false
                    }
                    defaultValue="Developpeur Mobile"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="mobile" className="block text-sm font-bold">
                    Un Devéloppeur Mobile
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez la programmation et les Technologies Mobiles.
                  </p>
                </div>
              </div>

              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="desktop"
                    type="checkbox"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    checked={
                      technologies?.indexOf("Developpeur Desktop") >= 0
                        ? true
                        : false
                    }
                    defaultValue="Developpeur Desktop"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="desktop" className="block text-sm font-bold">
                    Un Devéloppeur Desktop
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez la programmation et les Technologies Desktop.
                  </p>
                </div>
              </div>

              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="design"
                    defaultChecked={
                      technologies?.indexOf("Designer") >= 0 ? true : false
                    }
                    defaultValue="Designer"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="design" className="block text-sm font-bold">
                    Un Designer
                  </label>
                  <p className="text-gray-400">Pour Maitrisez le Design.</p>
                </div>
              </div>

              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="abd"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    type="checkbox"
                    defaultValue="Admin de BD"
                    defaultChecked={
                      technologies?.indexOf("Admin de BD") >= 0 ? true : false
                    }
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="abd" className="block text-sm font-bold">
                    Un Administrateur de base de données
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez les bases de données.
                  </p>
                </div>
              </div>

              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="reseau"
                    type="checkbox"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    defaultChecked={
                      technologies?.indexOf("Réseauteur") >= 0 ? true : false
                    }
                    defaultValue="Réseauteur"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="reseau" className="block text-sm font-bold">
                    Un Réseauteur
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez les réseaux informatiques et manipulez les
                    équipements.
                  </p>
                </div>
              </div>
              <div className=" flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="video"
                    type="checkbox"
                    onChange={(e) => {
                      handleChecked(e.target.value, e.target.checked);
                    }}
                    defaultChecked={
                      technologies?.indexOf("Vidéaste") >= 0 ? true : false
                    }
                    defaultValue="Vidéaste"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="video" className="block text-sm font-bold">
                    Un Vidéaste
                  </label>
                  <p className="text-gray-400">
                    Pour Maitrisez les montages des vidéos.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>

      <div className="border-b border-white/30 pb-8">
        <h3 className="font-semibold text-lg px-3 mt-2 uppercase text-yellow-400 py-2">
          PROJETS PERSONNELS
        </h3>
        <div className="sm:col-span-2">
          <label
            htmlFor="projets"
            className="block text-base font-semibold py-3"
          >
            Quels sont les projets que tu souhaites réaliser?
          </label>
          <div className="mt-2.5">
            <textarea
              name="projets"
              id="projets"
              defaultValue={profile?.projets || ""}
              required
              placeholder="ex: faire une calculatrice, faire un site web,... Ecrivez chaque projet en allant à la ligne donc en cliquant sur la touche Entrée"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="border-b border-white/30 pb-8">
        <h3 className="font-semibold text-lg px-3 mt-2 uppercase text-yellow-400 py-2">
          COMMENTAIRES
        </h3>
        <div className="sm:col-span-2">
          <label
            htmlFor="comments"
            className="block text-base font-semibold py-3"
          >
            Comment trouvez-vous ce site ?
          </label>
          <div className="mt-2.5">
            <textarea
              name="comments"
              defaultValue={profile?.comments || ""}
              id="comments"
              required
              rows={4}
              placeholder="Mettez ça en commentaire ici ...."
              className="block w-full rounded-md border-0 px-3.5 py-2 text-white bg-transparent font-bold shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
      </div>
      <SubmitButton />
    </form>
  );
}
