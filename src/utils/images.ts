import type { ImageMetadata } from "astro";

export const randomHandSrc = () =>
  imagePathToSrc(
    `/src/images/profil/hand0${Math.floor(Math.random() * (4 - 1) + 1)}.png`,
  );

export const randomSmallHandSrc = () =>
  imagePathToSrc(
    `/src/images/profil/hand0${Math.floor(Math.random() * (4 - 1) + 1)}-cut.png`,
  );

export const imagePathToSrc = (imagePath: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/**/*.{jpeg,jpg,png,gif,svg}",
  );

  if (!images[imagePath]) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/images/**/*.{jpeg,jpg,png,gif,svg}"`,
    );
  }

  return images[imagePath]();
};
