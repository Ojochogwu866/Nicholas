import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const config = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: "v2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(config);
export const urlFor = (source: any) => builder.image(source);

export default config;
