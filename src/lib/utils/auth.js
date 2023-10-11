import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectToDB from "./connect";
import User from "../models/user";
import bcrypt from "bcryptjs";
import { getServerSession } from "next-auth";

export const authOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectToDB();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            //check Password
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isMatch) {
              return user;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (err) {
          throw new Error(err.message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ credentials, account, profile }) {
      connectToDB();
      if (account.type === "credentials") {
        try {
          const currUser = await User.findOne({ email: credentials?.email });

          if (currUser) {
            //check Password
            const isMatch = await bcrypt.compare(
              credentials.password,
              currUser.password
            );

            if (isMatch) {
              return true;
            } else {
              throw new Error("Wrong Credentials");
            }
          } else {
            throw new Error("user not found");
          }
        } catch (err) {
          throw new Error("somethings wrong", err.message);
        }
      } else if (account.type === "oauth") {
        try {
          const userExists = await User.findOne({
            email: profile?.email,
          });

          if (!userExists) {
            await User.create({
              email: profile?.email,
              name: profile?.name.replace(" ", "").toLowerCase(),
              isAdmin: false,
            });
          }
          return true;
        } catch (error) {
          return false;
        }
      }
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    async jwt({ token }) {
      const dbuser = await User.findOne({
        email: token.email,
      });

      return {
        id: dbuser._id.toString(),
        name: dbuser.name,
        email: dbuser.email,
        isAdmin: dbuser?.isAdmin || false,
      };
    },
  },
};

export const getAuthSession = async () => await getServerSession(authOptions);
