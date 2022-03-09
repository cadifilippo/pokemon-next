import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Difilippo" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="pokemon, app, react, next" />

        <meta property="og:title" content="Información sobre los pokemones" />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}.`}
        />
        <meta property="og:image" content={`${origin}/images/banner.png`} />
      </Head>

      <Navbar />

      <main style={{ padding: '0px 20px' }}>{children}</main>
    </>
  );
};
