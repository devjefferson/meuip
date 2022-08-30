import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [meuIp, setMeuIp] = useState();

  async function webIp() {
    const Ip = await fetch("http://ip-api.com/json/", {
      method: "GET",
    });

    setMeuIp((await Ip.json()).query);
  }

  useEffect(() => {
    webIp();
  }, []);

  if (!meuIp) {
    return <h1>Load</h1>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Meu IP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Seu Ip é: {meuIp}</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
