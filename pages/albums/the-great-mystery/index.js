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
          </Col>
          <Col xs={8} md={8} className={homeStyles.coverImg}>
            <h3>View Here</h3>
            <ThePlayer url='https://youtu.be/4644VeW1wvg' width='100%' height='100%' playerStyle='thePlayer' />
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <h2>The Great Mystery</h2>
<p>By Walter and Donny
</p><p>
    
Another friend leaves this earth.<br/>
Another soul is gone.<br/>
Shanghai'd on an outbound ship.<br/>
Gonna sail to the far beyond<br/><br/>

I don't know when and if that journey ends;<br/>
or, if it's someplace we'd all like to be.<br/>
I do know reservations are already made. And, they're on hold for you and for me.<br/>
To the great mystery.<br/><br/>

You won't know if you'll be put aboard.<br/>

Won't even know if you're next in line.<br/>

Bon voyage.<br/>

Bon voyage.<br/>

Sailor, it's your time.<br/><br/>

There's many books, many prophets...<br/>

tellin' us where we're all gonna go.<br/>

One time one who has said  there just is no way you can ever really know.<br/><br/>

It does not matter, what faith you believe...<br/>
or, you don't believe at all.<br/>
When the trap door opens and the floor becomes a hole,<br/>
straight in you're gonna fall.<br/>
Into the great mystery.<br/><br/>

Thinkin' how you lived your life<br/>

as the ship casts  off.<br/><br/>

The good you did and did not do.<br/>

Weigh anchor<br/>

leave dock.<br/>


 You're time here is through.<br/>

Thinkin'  how you lived your life<br/>

when the ship casts off.<br/>

The good you did and did not do.<br/>

So weigh anchor...<br/>

leave dock.<br/><br/>

Your time has come due.<br/>

Your life here is through.<br/>

</p>
<p>&copy; 2023, Walter and Donny</p>
            </Col>
        </Row>
      </Container>
    </Layout>
  )
};


export default TheGreatMystery;