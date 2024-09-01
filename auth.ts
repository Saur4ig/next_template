import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";
import prisma from "./prisma/client";

const providers: Provider[] = [Google];

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: providers,
  pages: {
    signIn: "/account/login",
    signOut: "/account/signout",
    error: "/account/error",
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
