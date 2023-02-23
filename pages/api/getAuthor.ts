import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Author } from "@/typings";

const query = groq`
*[_type == "author"]
`;
type Data = {
  author: Author;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const author: Author = await sanityClient.fetch(query);
  res.status(200).json({ author });
}
