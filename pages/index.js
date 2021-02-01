import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import homeStyles from '../styles/home.module.scss'
import utilStyles from '../styles/utils.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

import ThePlayer from "../components/reactPlayer/reactPlayer"

const Home = () => (
  <>
  <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <Link href="/albums/road-2-cascadia">
              <h2 className={utilStyles.centerText}>NEW ALBUM!</h2>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className={homeStyles.coverImg}>
            <Link href="/albums/road-2-cascadia">
              <img src="/images/Road2CascadiaCover2.png" />
            </Link>
          </Col>
        </Row>
      
      </Container>
    </Layout>
  </>
)

export default Home
