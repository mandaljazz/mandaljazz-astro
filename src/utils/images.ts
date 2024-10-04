import type { ImageMetadata } from "astro";

export const randomHandSrc = () =>
  `/profil/hand0${Math.floor(Math.random() * (4 - 1) + 1)}.png`;

export const randomSmallHandSrc = () =>
  `/profil/hand0${Math.floor(Math.random() * (4 - 1) + 1)}-cut.png`;

export const imagePathToSrc = (imagePath: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/images/**/*.{jpeg,jpg,png,gif}",
  );

  if (!images[imagePath]) {
    throw new Error(
      `"${imagePath}" does not exist in glob: "src/images/*.{jpeg,jpg,png,gif}"`,
    );
  }

  return images[imagePath]();
};
