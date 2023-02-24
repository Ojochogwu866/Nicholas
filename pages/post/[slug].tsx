import { sanityClient, urlFor } from "@/sanity";
import { Post } from "@/typings";
import { GetStaticProps } from "next";
interface Props {
  posts: Post;
}

function Post({ posts }: Props) {
  return (
    <article>
      <section className="">
        <div className="">{posts.description}</div>
      </section>
    </article>
  );
}

export default Post;
export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
       slug {
        current
      }
      }`;
  const post = await sanityClient.fetch(query);
  const paths = post.map((posts: Post) => ({
    params: {
      slug: posts.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
         
        },
        description,
        mainImage,
        slug,
        body
    }`;
  const posts = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!posts) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};
