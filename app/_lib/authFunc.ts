import { signIn, signOut } from "next-auth/react";

export const handleIn = async (cred: string, redirURL: string) => {
  return await signIn(cred, { callbackUrl: redirURL });
};

export const handleOut = async (redirURL: string) => {
  return await signOut({ callbackUrl: redirURL });
};


