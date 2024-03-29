import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../../../components/layout'
import ThePlayer from "../../../components/reactPlayer/reactPlayer"

import roadStyles from '../../../pages/albums/road.module.scss'

export default function Cascadia() {
  return (
    <Layout>
      <Head>
        <title>Walter and Donny | Album: Road 2 Cascadia | Song: Cascadia </title>
      </Head>
      <Container> 
        <Row>
          <Col xs={12} md={12}>
            <h1>Song: Cascadia</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <h2><Link href="/albums/road-2-cascadia">Album: Road 2 Cascadia</Link></h2>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer url='https://soundcloud.com/walter-and-donny/cascadia'  width='100%' height='100%' addedStyle='cascadia' playerStyle='thePlayerCascadia' />
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <h2>Cascadia</h2>
<p>By Walter and Donny
</p><p>
    I spent 3 months on a Kansas combine,<br/>
    Wonderin' how Cascadia's been.<br/>
    Driftin' here sideways glance on my heart<br/>
    Dealin' down on Pike &amp; Pine<br/><br/>

    She hands out riddles. She sees in rhyme.<br/>
    Sometimes her thoughts are better than mine.<br/>
    I don't care. I don't mind.<br/>
    I love her as much as I've got time<br/><br/>

    Now I'm ramblin' back to the Promised Land<br/>
    Wonderin' if she'll have me back<br/>
    Who knows, maybe she's on Alberta<br/>
    Bleeding out roses and under attack<br/><br/>

    CHORUS:<br/>
    Mountains in the clouds are floating<br/>
    She lives her dreams out loud<br/><br/>

    Had I been her pioneer dream?<br/>
    Golden evergreen down a stream.<br/>
    Passin' the test outside of Eugene<br/>
    She sees more of you than it seems<br/><br/>

    I wanted her more on Bluitt Pass,<br/>
    Pocket full of wine and a face full of cash.<br/>
    Lake Chelan inside her head,<br/>
    She's going down there instead.<br/><br/>

    I gave her wine, a new design,<br/>
    On the edge of her space and time.<br/>
    She held me tight. She set me free,<br/>
    On the ridge of her decree<br/><br/>

    [CHORUS]<br/><br/>

    That whole life I left behind<br/>
    Is coming back to me in the tide;<br/>
    Lincoln City to Ocean Shores,<br/>
    In between her open doors.<br/><br/>

    Funny how she waves to me<br/>
    Starin' at the smiling sea.<br/>
    Sublime in the forest she says she's been.<br/>
    She opens the heart of the western wind.<br/><br/>

    Turning shells and native dance,<br/>
    I'll remain to take my chance;<br/>
    To dream with her and remain.<br/>
    She tells me it's all the same.<br/><br/>

    [CHORUS]


</p>
<p>&copy; 2021, Walter and Donny</p>
            </Col>
        </Row>
      </Container>
      </Layout>
  )
}