import React from 'react'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { Container, Row, Col } from 'react-bootstrap'

import ReactPlayer from "react-player"


const Home = () => (
  <>
  <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Container>
      <Row>
        <Col xs={12} md={12}>
          <h2 className={utilStyles.centerText}>NEW ALBUM: ROAD 2 CASCADIA!</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
        <div className={utilStyles.ReactPlayerWrapper}>
          <ReactPlayer
            url='https://soundcloud.com/walter-and-donny/sets/road-2-cascadia'
            width='42rem'
            height='42rem'
            light='true'
          />
        </div>
        </Col>
      </Row>
      </Container>
    </Layout>
  </>
)

export default Home
