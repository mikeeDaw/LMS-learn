// "use client";

import { useSession } from "next-auth/react";

export const sessionVal = () => {
  const sesh = useSession();
  return sesh;
};
