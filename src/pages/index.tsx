import { useEffect, useState } from 'react';

import { GetIP } from '@Services/ApiGetIp';

import styles from '../styles/Home.module.css';

const Home = () => {
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

export default Home;
