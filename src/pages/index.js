import Head from "next/head";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Navbar from "@/components/Navbar";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import JoinNow from "@/components/JoinNow";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Speed Cloud</title>
        <meta
          name="description"
          content="A melhor escolha para hospedagens online! Hospede seu bot, sua API, seu site ou até seu servidor de Minecraft."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://media.discordapp.net/attachments/1181629069171892376/1189321232835940483/20231222_110818-removebg-preview.png?ex=659dbcb6&is=658b47b6&hm=a38ba8d3cff426023477f47953e9bb3f6be60927d2429e5dd44e69f692e709ce&" />
      </Head>
      <Navbar />
      <Showcase />
      <About />
      <JoinNow />
      <Footer />
    </>
  );
}
