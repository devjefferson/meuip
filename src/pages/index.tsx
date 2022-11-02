import { ReactElement, useEffect, useState } from 'react';

import { GetIP } from '@Services/ApiGetIp';

import { NextPageWithLayout } from './_app';
import styles from '../styles/Home.module.css';
import Layout from 'src/component/Layout';

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
      </main>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
