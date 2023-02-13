import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";
import About from "../components/About";
import Shelf from "../components/publications";
import Contact from "../components/Contact";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className=" bg-[#0A1828] snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden text-white z-0 scrollbar scrollbar-none">
      <Head>
        <title>Author Nick</title>
      </Head>
      <Header />
      <section id="openpage" className=" snap-center">
        <OpenPage />
      </section>
      <section id="about" className=" snap-center">
        <About />
      </section>
      <section id="shelf&publications" className=" snap-start">
        <Shelf />
      </section>
      <section id="speak-with-nick" className=" snap-start">
        <Contact />
      </section>
    </div>
  );
}
