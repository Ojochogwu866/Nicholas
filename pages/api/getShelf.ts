import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Shelf } from "../../typings";

const query = groq`
*[_type == "socials"]
`;
type Data = {
  socials: Shelf[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Shelf[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
