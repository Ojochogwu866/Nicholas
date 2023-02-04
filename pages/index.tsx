import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[rgb(36,36,36)] snap-y snap-mandatory overfleo-scroll text-white h-screen">
      <Head>
        <title>Author Nick</title>
      </Head>
      <Header />
      <section id="openpage" className=" snap-center">
        <OpenPage />
      </section>
    </div>
  );
}
