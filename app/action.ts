"use server";
import { redirect } from "next/navigation";
// import { z } from "zod";
import prisma from "./lib/prisma";
// const profileSchema = z.object({
//   id: z.string({}).min(5),
//   nom: z.string().min(2),
//   postnom: z.string().min(2),
//   prenom: z.string().min(2),
//   numero: z.string().min(9),
//   adresse: z.string().min(5),
//   genre: z.enum(["Masculin", "Feminin"]),
//   technologies: z.string().min(2),
//   projets: z.string().min(2),
//   inspiration: z.string().min(2),
//   ambition: z.string().min(2),
//   comments: z.string().min(2),
// });
// const createProfile = profileSchema.omit({
//   id: true,
// });
export async function createProfileForUser(userId: string, formData: FormData) {
  // const {
  //   nom,
  //   postnom,
  //   prenom,
  //   numero,
  //   adresse,
  //   genre,
  //   technologies,
  // projets,
  // inspiration,
  // ambition,
  // comments,
  // } = Object.fromEntries(formData);
  let save = true;
  try {
    const newProfile = await prisma.profile.create({
      data: {
        nom: formData.get("nom")?.toString(),
        postnom: formData.get("postnom")?.toString(),
        prenom: formData.get("prenom")?.toString(),
        numero: formData.get("numero")?.toString(),
        adresse: formData.get("adresse")?.toString(),
        genre: formData.get("genre")?.toString(),
        technologies: formData.get("technologies")?.toString(),
        projets: formData.get("projets")?.toString(),
        inspiration: formData.get("inspiration")?.toString(),
        ambition: formData.get("ambition")?.toString(),
        comments: formData.get("comments")?.toString(),
        User: { connect: { id: userId } },
      },
    });
    console.log("Nouveau profil créé:", newProfile);
  } catch (error) {
    save = false;
    console.error("Erreur lors de la création du profil:", error);
  } finally {
    await prisma.$disconnect();

    redirect(`/dashboard/parametres/?save=${save}`);
  }
}
