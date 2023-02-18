import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";
import About from "../components/About";
import ShelfPub from "../components/publications";
import Contact from "../components/Contact";
import { GetStaticProps } from "next";
import { profileInfo, Shelf, Socials, Post, Profile } from "@/typings";
import { fetchPosts } from "@/utils/fetchPosts";
import { fetchProfile } from "@/utils/fetchProfile";
import { fetchProfileInfo } from "@/utils/fetchProfileInfo";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchShelf } from "@/utils/fetchShelf";

type Props = {
  profileInfo: profileInfo;
  shelf: Shelf[];
  profile: Profile;
  socials: Socials[];
  post: Post[];
};
const inter = Inter({ subsets: ["latin"] });

const Home = ({ profile, profileInfo, shelf, socials, post }: Props) => {
  return (
    <div className=" bg-[#0A1828] snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden text-white z-0 scrollbar scrollbar-none">
      <Head>
        <title>Author Nick</title>
      </Head>
      <Header socials={socials} />
      <section id="openpage" className=" snap-center">
        <OpenPage />
      </section>
      <section id="about" className=" snap-center">
        <About />
      </section>
      <section id="shelf&publications" className=" snap-start">
        <ShelfPub />
      </section>
      <section id="speak-with-nick" className=" snap-start">
        <Contact />
      </section>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileInfo: profileInfo = await fetchProfileInfo();
  const profile: Profile = await fetchProfile();
  const shelf: Shelf[] = await fetchShelf();
  const socials: Socials[] = await fetchSocials();
  const post: Post[] = await fetchPosts();

  return {
    props: {
      profile,
      profileInfo,
      shelf,
      socials,
      post,
    },
    revalidate: 10,
  };
};
