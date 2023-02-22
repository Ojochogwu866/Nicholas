import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Post } from "../../typings";

const query = groq`
*[_type == "Post"]{
  _id,
  title,
  publishedAt,
  'slug': slug.current,
  body
}
`;
type Data = {
  post: Post[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const post: Post[] = await sanityClient.fetch(query);
  res.status(200).json({ post });
}
