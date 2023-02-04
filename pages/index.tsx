import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import OpenPage from "../components/Openpage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Author Nick</title>
      </Head>
      <h1 className=" text-red-500">Author Nick</h1>
      <Header />
      <section className="">
        <OpenPage />
      </section>
    </div>
  );
}
