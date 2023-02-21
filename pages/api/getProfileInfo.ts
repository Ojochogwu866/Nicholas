import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { ProfileInfo } from "../../typings";

const query = groq`
*[_type == "profileInfo"][0]
`;
type Data = {
  profileInfo: ProfileInfo;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const profileInfo: ProfileInfo = await sanityClient.fetch(query);
  res.status(200).json({ profileInfo });
}
