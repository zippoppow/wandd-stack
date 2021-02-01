import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
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
          <ThePlayer />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <h2 className={utilStyles.centerText}>NEW ALBUM!</h2>
        </Col>
      </Row>
      </Container>
    </Layout>
  </>
)

export default Home
