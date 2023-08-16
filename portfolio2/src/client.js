import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "06dyobb4",
  dataset: "production",
  apiVersion: "2023-08-01",
  useCdn: true,
  token:
    "skoKOeMzCZUM3mUYtev0kbuNMVwmkIMGJSLyQ5TUf5BT5iz95ZaBcI1CbnJJj62tbZklYT00aaoYV4W5q1IgTL7qWNOh60iWhIfKTCkp1dWTy58JquUl6XsV7JxgnNsYC8rBAvIzO0xLqwcmLndMy9ldOiicXrDokVgfaUIWalMwRkzM9PuA",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
