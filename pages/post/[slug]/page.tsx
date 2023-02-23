import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@/sanity";
import { motion } from "framer-motion";
import { Post } from "@/typings";
type Props = {
  params: {
    slug: string;
  };
};
async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type=='Post' && slug.current == $slug][0]{
    ...,
  }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });
  return (
    <article>
      <section className="">
        <div className="">
          <motion.image
            className="object-cover object-center mx-auto"
            alt={Post.author.name}
            src={urlFor(post.blogImage).url()}
            fill
          />
        </div>
      </section>
    </article>
  );
}
export default Post;
