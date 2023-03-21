import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../../../components/layout';
import ThePlayer from "../../../components/reactPlayer/reactPlayer";
import Header from '../../../components/Header';
import homeStyles from '../../../styles/home.module.scss';



const TheGreatMystery = () => {
  return (
    <Layout>
      <Header siteTitle="Walter and Donny | Official Music Video: The Great Mystery" />
      <Container>
        <Row>
          <Col xs={12} md={12} className={homeStyles.coverText}>
            <h2>ALL ABOARD!!</h2>
            <h3>New music video: The Great Mystery.</h3>
            <p>Sunday, March 26, at 12PM PST/3PM EST</p>
          </Col>
        </Row>
        <Row>
          <Col xs={4} md={4} className={homeStyles.coverImg}>        
            <Link href="https://zoom.us/j/97921168271?pwd=RGhXNG1nc29zNVZCTWFmSVdORGxPdz09">
              <h3>Join Watch Party | 12PM PST/3PM EST</h3>
            </Link>
            <Link href="https://zoom.us/j/97921168271?pwd=RGhXNG1nc29zNVZCTWFmSVdORGxPdz09">
              <img src="/images/The-Great-Mystery/TheGreatMysteryWatchParty.png" />
            </Link>
          </Col>
          <Col xs={8} md={8} className={homeStyles.coverImg}>
            <h3>View Here</h3>
            <ThePlayer url='https://youtu.be/4644VeW1wvg' width='100%' height='100%' playerStyle='thePlayer' />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
};


export default TheGreatMystery;