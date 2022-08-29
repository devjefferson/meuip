import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ params }: any) => {
  const [myip, setMyip] = useState();

  useEffect(() => {
    setMyip(params);
  }, [params]);

  if (!myip) {
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
        <h1 className={styles.title}>Seu Ip é: {myip}</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const web = await fetch("http://ip-api.com/json/", {
      method: "GET",
    });

    const params = await web.json();
    return { props: { params: params.query } };
  } catch (error: any) {
    return { props: {} };
  }
};

export default Home;
