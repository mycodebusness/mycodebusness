// pages/api/logout.ts

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Supprimer les cookies de session
    res.setHeader("Set-Cookie", [
      `session_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
      // Ajoutez d'autres cookies à supprimer si nécessaire
    ]);
    // Réponse réussie
    res.status(200).json({ success: true });
  } else {
    // Méthode HTTP non autorisée
    res.status(405).json({ error: "Méthode HTTP non autorisée" });
  }
}
