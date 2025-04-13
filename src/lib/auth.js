import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";
import { prisma } from "./db";
import { stripe } from "./stripe";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    Github,
    Resend({
      from: "noreply@habitleaf.xyz", // ! edit this
    }),
  ],
  pages: {
    signOut: "/",
    signIn: "/login",
    verifyRequest: "/verify-email",
    error: "/login",
  },
  theme: {
    brandColor: "#0000FF", // ! edit this
    colorScheme: "auto",
    logo: "/logo.svg", // ! edit this
  },
  events: {
    createUser: async (message) => {
      const userId = message?.user?.id;
      const email = message?.user?.email;
      const name = message?.user?.name;

      if (!userId || !email) {
        return;
      }

      const stripeCustomer = await stripe.customers.create({
        email,
        name: name ?? undefined,
      });

      await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          stripeCustomerId: stripeCustomer?.id,
        },
      });
    },
  },
  callbacks: {
    async session({ session, user }) {
      const userDb = await prisma.user.findFirst({
        where: {
          id: user.id,
        },
        select: {
          role: true,
        },
      });

      session.user.role = userDb.role;

      return session;
    },
  },
});
