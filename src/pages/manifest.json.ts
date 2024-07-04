import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import favicon from "../images/favicon.png";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: "png",
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
      };
    }),
  );

  const manifest = {
    name: "mandaljazz",
    description: "Jazzfestivalen i Mandal",
    start_url: "/",
    display: "standalone",
    id: "450038AD-AEA4-4E03-B85C-DDC58814D728",
    icons,
  };

  return new Response(JSON.stringify(manifest));
};
