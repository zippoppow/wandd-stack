import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../../../components/layout'
import ThePlayer from "../../../components/reactPlayer/reactPlayer"

import roadStyles from '../../../pages/albums/road.module.scss'

export default function EdgeOfEverything() {
  return (
    <Layout>
      <Head>
        <title>Walter and Donny | Album: Road 2 Cascadia | Song: Edge of Everything</title>
      </Head>
      <Container> 
        <Row>
          <Col xs={12} md={12}>
            <h1>Song: Edge of Everything</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h2><Link href="/albums/road-2-cascadia">Album: Road 2 Cascadia</Link></h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer url='https://soundcloud.com/walter-and-donny/edge-of-everything'  
            width='100%' height='100%'  playerStyle='thePlayerEdgeEverything' />
          </Col>
        </Row>
      </Container>
      </Layout>
  )
}