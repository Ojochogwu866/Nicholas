import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Profile } from "@/typings";

const query = groq`
*[_type == "profile"]
`;
type Data = {
  profile: Profile;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const profile: Profile = await sanityClient.fetch(query);
  res.status(200).json({ profile });
}
