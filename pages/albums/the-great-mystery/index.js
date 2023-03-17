import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../../components/layout';
import ThePlayer from "../../../components/reactPlayer/reactPlayer";
import Header from '../../../components/Header';



const TheGreatMystery = () => {
  return (
    <Layout>
      <Header siteTitle="Walter and Donny | Official Music Video: The Great Mystery" />

      <Container>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer url='https://youtu.be/4644VeW1wvg' width='100%' height='100%' playerStyle='thePlayer' />
          </Col>
        </Row>
      </Container>
      </Layout>
  )
};


export default TheGreatMystery;