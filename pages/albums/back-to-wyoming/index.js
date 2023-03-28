
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../../components/layout';
import ThePlayer from "../../../components/reactPlayer/reactPlayer";
import Header from '../../../components/Header';

import roadStyles from '../road.module.scss'

const Road2Cascadia = () => {
  return (
    <Layout>
      <Header siteTitle="Walter and Donny | Album: Road 2 Cascadia" />

      <Container>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer url='https://soundcloud.com/walter-and-donny/sets/album-back-to-wyoming' width='100%' height='100%' playerStyle='thePlayer' />
          </Col>
        </Row>
      </Container>
      </Layout>
  )
};


export default Road2Cascadia;