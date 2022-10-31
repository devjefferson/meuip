import { useEffect, useState } from 'react';

import Axios from 'axios';

import styles from '../styles/Home.module.css';

const Home = () => {
  const [meuIp, setMeuIp] = useState();

  async function webIp() {
    await Axios({
      method: 'GET',
      baseURL: process.env.NEXT_PUBLIC_API_IP,
    }).then(({ data }) => {
      setMeuIp(data.ip);
      window.dataLayer.push({
        event: 'ipTextView',
        ipText: data.ip,
      });
    });
  }

  useEffect(() => {
    webIp();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Seu Ip é: {meuIp ? meuIp : '0.0.0.0'}</h1>
      </main>
    </div>
  );
};

export default Home;
