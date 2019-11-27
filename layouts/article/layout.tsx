import React from 'react';
import Head from 'next/head';
import { Base } from '../base';
import { Header } from './header';
import { Footer } from '../../components/footer';
import { Center } from '../../components/center';

export const Layout: React.FC<{
  header: React.ReactNode;
}> = ({ header, children }) => (
  <Base>
    <Head>
      <title>Rare Agency - Workshopit</title>
    </Head>
    <Header>{header}</Header>
    <main className="main">
      <Center className="article-center">{children}</Center>
    </main>
    <Footer />
  </Base>
);
