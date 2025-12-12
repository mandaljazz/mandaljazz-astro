/**
 * Helper function to convert slug to artist URL
 * Slugs from content collections include folder path: "2026/pumpegris" or "2023/snus"
 */
export const getArtistUrl = (slug: string): string => {
  return `/artist/${slug}`;
};
