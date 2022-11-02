import Head from 'next/head';

export const HeadComponent = () => {
  const url = 'https://meuip.app';
  const title = 'MeuIP.App - Qual é o meu ip?';
  const description =
    'Descubra aqui qual é o seu IP Internet e acesse as melhores ferramentas de diagnostico de sua rede, Como descobrir qual é o meu IP?';
  const image = '/ogmeuip.png';

  return (
    <Head>
      <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="teste, medição, medir, speedtest, conexão, download, velocímetro, upload, latências, rápido, fácil, largura de banda, Anatel, internet, qualidade, Brasil, velocidade, banda larga, como medir a internet, como medir velocidade, como testar velocidade, como testar internet, operadora, medir internet celular, Internet lenta"
      />
      {/* facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};
