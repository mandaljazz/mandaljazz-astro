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
