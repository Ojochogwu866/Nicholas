// import { sanityClient, urlFor } from "@/sanity";
// import { motion } from "framer-motion";
// import { Post, Slug } from "@/typings";
// import { GetStaticProps, GetStaticPaths } from "next";
// import { fetchPosts } from "@/utils/fetchPosts";

// type Props = {
//   post: Post[];
// };
// function Post({ post }: Props) {
//   return (
//     <article>
//       <section className="">
//         <div className="">{post.description}</div>
//       </section>
//     </article>
//   );
// }
// export default Post;

// export const getStaticProps: GetStaticProps<Props> = async () => {
//   const post: Post[] = await fetchPosts();
//   return {
//     props: {
//       post,
//     },
//   };
// };
// export async function getStaticPaths() {
//   return {
//     paths: ["/post/[slug]", { params: { slug: "" } }],
//     fallback: true,
//   };
// }
import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@/sanity";
import { motion } from "framer-motion";
import { Post } from "@/typings";
type Props = {
  params: {
    slug: string;
  };
};

async function Pos({ params: { slug } }: Props) {
  const query = groq`
    *[_type=="post" && slug.current == $slug]{
      ...,
      author->
    }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });
  return (
    <article>
      <section className="">
        <div className="">
          <motion.img
            className="object-cover object-center mx-auto"
            alt={post.author.name}
            src={urlFor(post.mainImage).url()}
          />
        </div>
      </section>
    </article>
  );
}

export default Pos;
