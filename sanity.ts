import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
  useCdn: false,
};
export const sanityClient = createClient(config);
export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
