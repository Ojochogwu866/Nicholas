// import { sanityClient, urlFor } from "@/sanity";
// import { motion } from "framer-motion";
// import { Post } from "@/typings";

// type Props = {
//   post: Post[][0];
// };
// function Post({ post }: Props) {
//   return (
//     <article>
//       <section className="">
//         <div className="">
//           <motion.img
//             className="object-cover object-center mx-auto"
//             alt={post.author.name}
//             src={urlFor(post.mainImage).url()}
//           />
//         </div>
//       </section>
//     </article>
//   );
// }
// export default Post;

import { groq } from "next-sanity";
import { sanityClient, urlFor } from "@/sanity";
import { motion } from "framer-motion";
import { Post } from "@/typings";

type Props = {
  params: {
    slug: string;
  };
};
async function Posts({ params: { slug } }: Props) {
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    ...,
    author->
  }
  `;
  const post: Post = await sanityClient.fetch(query, { slug });
  console.log(post);
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
export default Posts;
