import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Walter and Donny | About</title>
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <h1>About Walter and Donny</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <p>Walter and Donny performs Cosmic Americana -- a mix of Americana pop songs blending in an alt-country feel and elements of space-rock.
            </p><p>
            You might hear elements of classics like The Beatles or The Allman Brothers or The Byrds emerging from their songs. But, you will always hear their strong and welcoming melodies weaving the same kinds stories and themes that make our mutual lives together compelling and beautiful: stories of family, unrequited love and the feeling of being alive on a reflective Tuesday afternoon.
            </p><p>
            Walter: "We’ve been in so many different music projects together. We’ve known each other for about 14 or 15 years, now. We’ve done different things together and then gone off and done other things, but we’ve always stuck together."
            </p><p>
            Interviewer: What do you like most about making music and being in a band?
            </p><p>
            Walter: That’s a good question.
            </p><p>
            Donny: Warm fuzz.
            </p><p>
            Walter: Warm fuzz?
            </p><p>
            Walter: It’s just fun to play...
            </p><p>
            Donny: You can work out your artistic visions. It’s an attempt to approximate a certain kind of truth. There is just so much overwhelmingly good music out there and we just want to be a part of that joy.
            </p><p>
            Walter: Shut up, Donny! Am I wrong here?</p>
          </Col>
        </Row>
      </Container>

    </Layout>
  )
}
