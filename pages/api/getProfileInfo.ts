import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { profileInfo } from "../../typings";

const query = groq`
*[_type == "profileInfo"]
`;
type Data = {
  ProfileInfo: profileInfo;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const ProfileInfo: profileInfo = await sanityClient.fetch(query);
  res.status(200).json({ ProfileInfo });
}
