import { ReactElement, useEffect, useState } from 'react';

import Layout from '@Components/Layout';
import { Velocity } from '@Components/Velocity';
import { GetIP } from '@Services/ApiGetIp';

import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const [meuIp, setMeuIp] = useState('');

  function webIp() {
    GetIP().then((res) => setMeuIp(res));
  }

  useEffect(() => {
    webIp();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Seu Ip é: {meuIp ? meuIp : '0.0.0.0'}</h1>
        <Velocity />
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
