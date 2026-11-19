import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db(process.env.DB_NAME);

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  user: {
    additionalFields: {
      role: {
        type: ["student", "tutor", "admin"],
        input: true,
        defaultValue: "student",
      },
      subscriptionPlan: {
        type: ["pro", "free"],
        defaultValue: "free",
        input: false,
      },
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
