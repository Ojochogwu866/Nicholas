import { sanityClient, urlFor } from "@/sanity";
import { Post, Socials } from "@/typings";
import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import { motion } from "framer-motion";
import { fetchSocials } from "@/utils/fetchSocials";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SocialIcon } from "react-social-icons";
interface Props {
  posts: Post;
  socials: [Socials];
}
const social = `*[_type == "socials"]{
    _id,
    url
    }`;
const Post = ({ posts, socials }: Props) => {
  return (
    <article>
      <Header socials={socials} />
      <section className="  w-11/12 mt-10 mx-auto">
        <div className="group cursor-Pointer  mt-1 flex flex-col">
          <div className=" relative space-y-4 sx:h-[200px]  w-full mx-auto h-[280px]  drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <motion.img
              className=" object-cover object-center h-full w-full"
              src={urlFor(posts?.mainImage).url()}
              alt={posts?.author.name}
            />
            <div className=" absolute bottom-0 w-full bg-opacity-50 bg-black  rounded drop-shadow text-white p-7 flex justify-between flex-col">
              <p className=" text-sm font-semibold">{posts?.title}</p>
              <p className=" text-[10px] flex justify-end items-end">
                {new Date(posts?.publishedAt).toDateString().slice(4)}
              </p>
              <span className=" mt-2 text-xs font-normal">
                Author: {posts?.author.name}
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <PortableText
            className="mt-10"
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={posts.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              link: ({ href, children }: any) => (
                <a
                  href={href}
                  className="text-blue-500 text-xs hover:underline"
                >
                  {children}
                </a>
              ),
            }}
          ></PortableText>
        </div>
      </section>
      <div className=" justify-center sm:-mt-44 items-center flex flex-col  bottom-5 ">
        <div className=" sx:flex">
          {socials.map((social) => (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="#2F1C6A"
              bgColor="transparent"
              style={{ width: 30 }}
            />
          ))}
        </div>
        <p className=" text-[13px] underline">
          Ioraver Godwin Nicholas — © 2023
        </p>
      </div>
    </article>
  );
};
export default Post;
export const getStaticPaths = async () => {
  const query = `*[_type == 'post']{
        _id,
        slug
      }`;
  const post: Post[] = await sanityClient.fetch(query);
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
  const socials = await sanityClient.fetch(social);
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
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
      socials,
    },
    revalidate: 60,
  };
};
