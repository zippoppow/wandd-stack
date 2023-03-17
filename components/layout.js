import Head from 'next/head'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

export const siteTitle = 'Walter and Donny | Official Band Site'

export default function Layout({ children, home }) {
  return (
    <div className={styles.innerContainer}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Walter and Donny | Official Band Site. Cosmic Americana music at its finest."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Container>
        <Row>
          <Col xs={12} md={12}>
                    {home ? (
                    <>
                        <img
                        src="/images/wanddlogo.png"
                        className={`${styles.headerHomeImage}`}
                        alt="Walter and Donny | Official Band Site"
                        />
                    </>
                    ) : (
                    <>
                        <Link href="/">
                        <a>
                            <img
                            src="/images/wanddlogo.png"
                            className={`${styles.headerImage}`}
                            alt="Walter and Donny | Official Band Site"
                            />
                        </a>
                        </Link>
                    </>
                    )}
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={2} lg={2}></Col>
          <Col xs={8} md={8} lg={8}>
            <Link href="/about">
              <a className={styles.navItem}>About</a>
            </Link>
            <span>&nbsp;|&nbsp;</span>
            <Link href="/albums/road-2-cascadia">
              <a className={styles.navItem}>Road&nbsp;2&nbsp;Cascadia</a>
            </Link>
            <span>&nbsp;|&nbsp;</span>
            <Link href="/albums/the-great-mystery">
              <a className={styles.navItem}>The Great Mystery</a>
            </Link>
          </Col>
          <Col xs={2} md={2} lg={2}></Col>
        </Row>  
      </Container>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
