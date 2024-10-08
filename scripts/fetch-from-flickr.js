import "dotenv/config";
import { createFlickr } from "flickr-sdk";
import fs from "fs";

const USER_ID = "201530280@N05";

const { flickr } = createFlickr(process.env.FLICKR_API_KEY);

const photosetsResponse = await flickr("flickr.photosets.getList", {
  user_id: USER_ID,
  primary_photo_extras: "url_z",
});

console.log("Found", photosetsResponse.photosets.photoset.length, "albums");

for (const photoset of photosetsResponse.photosets.photoset) {
  const photos = await flickr("flickr.photosets.getPhotos", {
    photoset_id: photoset.id,
    user_id: USER_ID,
    extras: "url_s, url_z, url_o",
  });

  console.log(
    "Found",
    photos.photoset.photo.length,
    "photos in album",
    photoset.title._content,
  );

  const album = {
    title: photoset.title._content,
    description: photoset.description._content,
    id: photoset.id,
    href: `https://www.flickr.com/photos/${USER_ID}/albums/${photoset.id}`,
    url_z: photoset.primary_photo_extras.url_z,
    height_z: photoset.primary_photo_extras.height_z,
    width_z: photoset.primary_photo_extras.width_z,
    photos: photos.photoset.photo.map((photo) => ({
      title: photo.title,
      href: `https://www.flickr.com/photos/${USER_ID}/${photo.id}/in/album-${photoset.id}/`,
      url_o: photo.url_o,
      url_z: photo.url_z,
      width_z: photo.width_z,
      height_z: photo.height_z,
      url_s: photo.url_s,
      width_s: photo.width_s,
      height_s: photo.height_s,
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
