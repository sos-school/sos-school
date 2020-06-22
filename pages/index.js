import Head from 'next/head';
import { Navbar, Nav, Button, Form, Col, Row, InputGroup, FormControl } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SOSchool || Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="home">
          <h1 className="title">
            Welcome to <div className="test">SOSchool</div>
          </h1>

          <p className="description">
            We help your children push through the challenges in CoViD-19's wake
          </p>

          <Button variant="outline-primary" size="lg" href="#contact">Contact us</Button>
        </section>
        
        <section id="contact">
          <h2>Contact us</h2>

          <Form>
          <Form.Label>Get in touch so we can allocate your child(ren) a tutor right away</Form.Label>
            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs={2}>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </section>
      </main>

      <footer>
        <a
          href="https://soschool.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2020 SOSchool
        </a>
        <p>Made by <a href="https://nicobachner.com">Nico Bachner</a></p>
      </footer>

      <style jsx>{`
        .red {
          color: #dd0000;
        }

        .purple {
          color: #770077;
        }

        .blue {
          color: #0000dd;
        }

        #home {
          height: 100vh;
        }

        #contact {
          height: 100vh;
        }

        .test {
          font-size: 72px;
          background: linear-gradient(.25turn, red 0 28%, blue 45% 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
        }

        section {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          padding: 20px;
          border-top: 1px solid #eaeaea;
          text-align: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        p a {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          padding: 50px;
          line-height: 1.2;
          font-size: 2rem;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
