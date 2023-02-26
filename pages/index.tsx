import Head from "next/head";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";
import About from "../components/About";
import ShelfPub from "../components/publications";
import Contact from "../components/Contact";
import { GetStaticProps } from "next";
import { ProfileInfo, Shelf, Socials, Profile } from "@/typings";
import Footer from "@/components/Footer";
import { sanityClient } from "@/sanity";

interface Props {
  profileInfo: ProfileInfo;
  shelf: Shelf[];
  profile: Profile;
  socials: [Socials];
}
const social = `*[_type == "socials"]{
_id,
url
}`;
const profileInfor = `*[_type == "profileInfo"][0]{
  backgroundInformation,
  profileImage
}
`;
const profileBio = `*[_type == "profile"][0]{
  title,
  name
}
`;
const bookShelf = `*[_type == "shelf"]{
  booktitle,
  bookinformation,
  bookimage,
  url
}
`;
export default function Home({ socials, profile, profileInfo, shelf }: Props) {
  return (
    <div className=" bg-[#fff]/80 snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden text-[#2F1C6A] z-0 scrollbar scrollbar-none">
      <Head>
        <title>Ioraver Nicholas – Author</title>
      </Head>
      <Header socials={socials} />
      <section id="openpage" className=" snap-center">
        <OpenPage profile={profile} />
      </section>
      <section id="about" className=" snap-center">
        <About profileInfo={profileInfo} />
      </section>
      <section id="shelf&publications" className=" snap-start">
        <ShelfPub shelf={shelf} />
      </section>
      <section id="speak-with-nick" className=" snap-start">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileInfo = await sanityClient.fetch(profileInfor);
  const profile = await sanityClient.fetch(profileBio);
  const shelf = await sanityClient.fetch(bookShelf);
  const socials = await sanityClient.fetch(social);
  return {
    props: {
      profile,
      profileInfo,
      shelf,
      socials,
    },
    revalidate: 60,
  };
};
