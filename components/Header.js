import React from 'react';
import Head from 'next/head';
import { siteTitle } from './layout';


const Header = () => (
    <>
        <Head siteTitle={siteTitle}>
          <title>{siteTitle} | walteranddonny.crypto</title>
        </Head>
        </>
);

export default Header;