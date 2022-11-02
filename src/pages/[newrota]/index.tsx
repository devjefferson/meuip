import { useEffect, useState } from 'react';

import Axios from 'axios';

import styles from '../../styles/Home.module.css';
import { GetIP } from '@Services/ApiGetIp';

const Page = () => {
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

export default Page;
