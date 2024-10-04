import "dotenv/config";
import { createFlickr } from "flickr-sdk";
import fs from "fs";

const USER_ID = "201530280@N05";
const { flickr } = createFlickr(process.env.FLICKR_API_KEY);

const photosetsResponse = await flickr("flickr.photosets.getList", {
  user_id: USER_ID,
  primary_photo_extras: "url_z",
});

for (const photoset of photosetsResponse.photosets.photoset) {
  const photos = await flickr("flickr.photosets.getPhotos", {
    photoset_id: photoset.id,
    user_id: USER_ID,
    extras: "url_z, url_o",
  });

  const album = {
    title: photoset.title._content,
    description: photoset.description._content,
    id: photoset.id,
    href: `https://www.flickr.com/photos/${USER_ID}/albums/${photoset.id}`,
    url_z: photoset.primary_photo_extras.url_z,
    photos: photos.photoset.photo.map((photo) => ({
      title: photo.title,
      href: `https://www.flickr.com/photos/${USER_ID}/${photo.id}/in/album-${photoset.id}/`,
      url_z: photo.url_z,
      url_o: photo.url_o,
    })),
  };

  const albumData = JSON.stringify(album, null, 2);

  fs.writeFileSync(
    `./src/content/flickr-albums/${photoset.id}.json`,
    albumData,
    {
      encoding: "utf8",
      flag: "w",
    },
  );
}
