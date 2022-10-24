import Head from "next/head";
import Image from "next/image";
import { Header } from "../components/header";

export default function Home() {
  return (
    <div className={"flex flex-col w-full h-full"}>
      <Head>
        <title>Taura Bots</title>
        <meta name="description" content="Robótica diretamente da UFSM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <h1 className={"text-red-500 font-bold text-lg"}>Taura BOTS</h1>
      </div>
    </div>
  );
}
