import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../../../components/layout'
import ThePlayer from "../../../components/reactPlayer/reactPlayer"

import roadStyles from '../../../pages/albums/road.module.scss'

export default function LightInMyEyes() {
  return (
    <Layout>
      <Head>
        <title>Walter and Donny | Album: Road 2 Cascadia | Song: You are the light in my eyes</title>
      </Head>
      <Container> 
        <Row>
          <Col xs={12} md={12}>
            <h1>Song: You are the light in my eyes</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h2><Link href="/albums/road-2-cascadia">Album: Road 2 Cascadia</Link></h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer url='https://soundcloud.com/walter-and-donny/you-are-the-light-in-my-eyes'  
              width='100%' height='100%' playerStyle='thePlayerLightInEyes' />
          </Col>
        </Row>
      </Container>
      </Layout>
  )
}