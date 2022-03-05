import { FC } from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Difilippo" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="pokemon, app, react, next" />
      </Head>

      <main>{children}</main>
    </>
  );
};
