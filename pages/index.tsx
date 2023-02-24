import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";
import About from "../components/About";
import ShelfPub from "../components/publications";
import Contact from "../components/Contact";
import { GetStaticProps } from "next";
import { ProfileInfo, Shelf, Socials, Profile } from "@/typings";
import { fetchProfile } from "@/utils/fetchProfile";
import { fetchProfileInfo } from "@/utils/fetchProfileInfo";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchShelf } from "@/utils/fetchShelf";

type Props = {
  profileInfo: ProfileInfo;
  shelf: Shelf[];
  profile: Profile;
  socials: Socials[];
};
const inter = Inter({ subsets: ["latin"] });

const Home = ({ profile, profileInfo, shelf, socials }: Props) => {
  return (
    <div className=" bg-[#fff]/80 snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden text-[#2F1C6A] z-0 scrollbar scrollbar-none">
      <Head>
        <title>Author Nick</title>
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
    </div>
  );
};
export default Home;
export const getStaticProps: GetStaticProps<Props> = async () => {
  const profileInfo: ProfileInfo = await fetchProfileInfo();
  const profile: Profile = await fetchProfile();
  const shelf: Shelf[] = await fetchShelf();
  const socials: Socials[] = await fetchSocials();

  return {
    props: {
      profile,
      profileInfo,
      shelf,
      socials,
    },
    revalidate: 10,
  };
};
