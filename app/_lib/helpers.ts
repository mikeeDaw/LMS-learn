export const getTierNum = (tier: string) => {
  switch (tier.toUpperCase()) {
    case "FREE":
      return 0;
    case "PREMIUM":
      return 1;
    case "ASTRO":
      return 2;
    default:
      return 3;
  }
};
