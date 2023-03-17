import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import homeStyles from '../styles/home.module.scss';
import utilStyles from '../styles/utils.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';

const Home = () => (
  <>
  <Layout home>
      <Header siteTitle={siteTitle} />
      <Container>
      <Row>
          <Col xs={12} md={12} className={homeStyles.coverText}>
            <Link href="/albums/the-great-mystery">
              <h2 className={utilStyles.centerText}>Live WATCH PARTY!</h2>
            </Link>
            <h4 className={utilStyles.centerText}>Sunday, March 26 2023</h4>
            <h4 className={utilStyles.centerText}>12PM PST</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className={homeStyles.coverImg}>
            <Link href="/albums/the-great-mystery">
              <img src="/images/The-Great-Mystery/TheGreatMystery_Official_video.png" />
            </Link>
          </Col>
        </Row> 
        {/* <Row>
          <Col xs={12} md={12}>
            <Link href="/albums/road-2-cascadia">
              <h2 className={utilStyles.centerText}>LATEST ALBUM!</h2>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className={homeStyles.coverImg}>
            <Link href="/albums/road-2-cascadia">
              <img src="/images/road-2-cascadia/Road2CascadiaCover2.png" />
            </Link>
          </Col>
        </Row>  */}
      </Container>
    </Layout>
  </>
)

export default Home
