import Head from 'next/head'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Layout from '../../components/layout'
import ThePlayer from "../../components/reactPlayer/reactPlayer"

import roadStyles from './road.module.scss'

export default function Road2Cascadia() {
  return (
    <Layout>
      <Head>
        <title>Walter and Donny | Album: Road 2 Cascadia</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <ThePlayer />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p>
              1. Open Road - Open Road Part Deux - Sunny Day<br/>
              <Link href="/albums/road-2-cascadia/cascadia">2. Cascadia</Link><br/>
              3. She Lies Awake<br/>
              4. Edge of Everything<br/>
              5. Cascadia's Reprisal<br/>
              6. Cody's Hometown Bar<br/>
              7. You are the Light in My Eyes<br/>
              8. Roads to You<br/>
              9. You Will Always be Beautiful<br/>
              10. I'm All Yours
            </p>
          </Col>
        </Row>
        <Row>
            <Col xs={12} md={12}>
            <h2>Road 2 Cascadia is a Raucous Road Trip Through the American West</h2>
<p>By Hector Seengs
</p><p>
Bowling Stoned Magazine, Jan 2021
</p><p>
Walter and Donny’s latest release, <em className={roadStyles.boldEmphasis}>Road 2 Cascadia</em> is an aural fantasy rooted in gothic Americana and buoyed by airy guitar tapestries, gritty Allman Brothers hooks and soaring poetic license. From the first notes of the overture-like opening track, itself a trilogy with multiple chapters, Walter and Donny signal their intent to take you on a journey across the vast wilderness of the American Northwest. Only, we are floating on a cushion of swirling guitar lines, deftly avoiding calamitous cliffside collisions.
Walter and Donny revel in trickery, as in <em className={roadStyles.boldEmphasis}>Cascadia</em>, postiting rootsy grooves which lead you down a forest path alongside a tumbling stream, only to present a ski jump launching us into unknown mountains in the clouds, floating.
</p><p>
<em className={roadStyles.boldEmphasis}>She Lies Awake</em>, again, takes us on a ride, inviting us to shuffle into an 80s rocker, as if The Cars came up in Austin, TX. Only our ride veers of the road to trace a path through endless desert plains, wind in our hair, with no need to step on the brakes or turn the wheel. Driving guitar riffs lurch continually forward until the needle hits empty.
</p><p>
<em className={roadStyles.boldEmphasis}>Edge of Everything</em> promises a hint of reprieve, uniting the wonder of universal expanse and personal experience using the woven lines of multiple guitars as the comforting hammock, until the promise of realization prompts us to jump into a country porch groove, if country porch grooves had the full compliment of crash cymbals.
</p><p>
<em className={roadStyles.boldEmphasis}>Cascadia’s Reprisal</em> returns to the scene of the crime, marking the end of the first act and introducing us to the other side of the great divide. We travel up through heavy Pink Floyd guitar melody until we clear the pass and slide down slinky surf guitar lines bouncing off of thumping drum beats.
</p><p>
<em className={roadStyles.boldEmphasis}>Cody’s Hometown Bar</em>, seems like the easy entry to next part of the journey. A comfortable place bathed in Jimmy Buffet vibes and cool drinks. Then the reality of small town struggle bullies its way through the front door to confront the comfortable patrons lined up on their stools. This is the time get up and go.
And go we do, as the searing hooks of You Are the Light of My Eyes allow us to run into the open doors of a moving car. Dust in the rearview mirror and arms out the window, don’t worry about the speed limit, it’s a classic anthem.
</p><p>
Cut to <em className={roadStyles.boldEmphasis}>Road to You</em>, the sun is setting, someone is laying down in the back seat, and the rolling swirl of country rock as seen through the eyes of your favorite British Blues band plays on the radio. Slowing down but not stopping.
</p><p>
<em className={roadStyles.boldEmphasis}>You Will Always Be Beautiful</em> swerves back onto the main highway, with a mid-century swing beat and a polished vocal feel harkening to the time of Roy Orbison and early orchestral rock.
</p><p>
Finally we are dropped off, close to home, dusty but not dirty. <em className={roadStyles.boldEmphasis}>I’m All Yours</em> pulls up softly with the easy picking of an old acoustic guitar but throws you a souvenir so you won’t think it was all a dream: a rustic bauble of bass, drums, no-holds-barred guitar and spacious vocals that makes you doubt what is real and what is in your head, or if it even matters which is which.
</p>
            </Col>
        </Row>
      </Container>
      </Layout>
  )
}