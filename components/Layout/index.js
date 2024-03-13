import React from 'react';
import Head from "next/head";
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Layout({children}) {
  return (
    <div>
      <Head>
        <title>Vaibhav Singh</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
