import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { profileInfo } from "../../typings";

const query = groq`
*[_type == "profileInfo"]
`;
type Data = {
  profileInfo: profileInfo[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const profileInfo: profileInfo[] = await sanityClient.fetch(query);
  res.status(200).json({ profileInfo });
}
