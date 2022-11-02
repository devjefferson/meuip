import { Wrapper } from './styles';

export const Velocity = () => {
  return (
    <>
      <Wrapper
        css={{
          display: 'none',
          '@lgDown': {
            display: 'flex',
          },
        }}
        dangerouslySetInnerHTML={{
          __html: `<iframe loading='carregando...' src="https://beta.simet.nic.br/widget.html" height="780" width="320" style="border:none" ></iframe>`,
        }}
      />
      <Wrapper
        css={{
          display: 'flex',
          '@lgDown': {
            display: 'none',
          },
        }}
        dangerouslySetInnerHTML={{
          __html: `<iframe loading='carregando...'  src="https://beta.simet.nic.br/widget.html" height="320" width="780" style="border:none"></iframe>`,
        }}
      />
    </>
  );
};
