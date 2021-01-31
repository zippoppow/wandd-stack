import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'

import ReactPlayer from "react-player"


const Home = () => (
  <>
  <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <ReactPlayer
          url="https://soundcloud.com/walter-and-donny/sets/road-2-cascadia"
        />
      </section>
    </Layout>
  </>
)

export default Home
