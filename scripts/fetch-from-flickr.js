import "dotenv/config";
import { createFlickr } from "flickr-sdk";
import fs from "fs";

const { flickr } = createFlickr(process.env.FLICKR_API_KEY);

// See docs: https://www.flickr.com/services/api/flickr.urls.lookupUser.html
const lookupUserResponse = await flickr("flickr.urls.lookupUser", {
  url: "https://www.flickr.com/people/mandaljazz/",
});

const user_id = lookupUserResponse.user.id;

// See docs: https://www.flickr.com/services/api/flickr.photosets.getList.html
const photosetsResponse = await flickr("flickr.photosets.getList", {
  user_id,
  primary_photo_extras: "url_z",
});

for (const photoset of photosetsResponse.photosets.photoset) {
  // See docs: https://www.flickr.com/services/api/flickr.photosets.getPhotos.html
  const photos = await flickr("flickr.photosets.getPhotos", {
    photoset_id: photoset.id,
    user_id,
    extras: "url_s, url_z, url_o, url_sq, url_q",
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
    href: `https://www.flickr.com/photos/${user_id}/albums/${photoset.id}`,
    url_z: photoset.primary_photo_extras.url_z,
    height_z: photoset.primary_photo_extras.height_z,
    width_z: photoset.primary_photo_extras.width_z,
    photos: photos.photoset.photo.map((photo) => ({
      id: photo.id,
      title: photo.title,
      href: `https://www.flickr.com/photos/${user_id}/${photo.id}/in/album-${photoset.id}/`,
      url_o: photo.url_o,
      url_z: photo.url_z,
      width_z: photo.width_z,
      height_z: photo.height_z,
      url_s: photo.url_s,
      width_s: photo.width_s,
      height_s: photo.height_s,
      url_sq: photo.url_sq,
      width_sq: photo.width_sq,
      height_sq: photo.height_sq,
      url_q: photo.url_q,
      width_q: photo.width_q,
      height_q: photo.height_q,
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
