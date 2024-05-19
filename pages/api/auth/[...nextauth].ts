// Import des modules nécessaires
import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

// Récupération des identifiants des fournisseurs depuis les variables d'environnement
const githubId = process.env.GITHUB_ID!;
 const githubSecret = process.env.GITHUB_SECRET!;
const googleId = process.env.GOOGLE_CLIENT_ID!;
const googleSecret = process.env.GOOGLE_CLIENT_SECRET!;

// Vérification de la présence des identifiants des fournisseurs
if (!githubId || !githubSecret ||!googleId || !googleSecret) {
  throw new Error("Pas de GitHub ni Google dans le fichier .env");
}

// Configuration des fournisseurs d'authentification et des rappels (callbacks)
export const authConfig: NextAuthOptions = {
  providers: [
   GithubProvider({
      clientId: githubId,
     clientSecret: githubSecret,
    }),
    GoogleProvider({
      clientId: googleId!,
      clientSecret: googleSecret!,
    }),
  ],
  callbacks: {
    async session({ session, user }: { session: Session; user: User }) {
      session.user.id = user.id as string;
      return Promise.resolve(session);
    },
    async signIn({ user, account }) {
      // Redirection après la connexion
      return "/dashboard";
    },
  },
  adapter: PrismaAdapter(prisma),
};

// Export de la configuration NextAuth
export default NextAuth(authConfig);
