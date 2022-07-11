import { Button, Card, Col, Container, Row } from "react-bootstrap";
import GetInTouch from "./Components/GetInTouch";
import LivingRaw from "./Components/LivingRawInfo";

const Body = () => {
    return (
<Container>

    <Row>
        <Col>
        <h1 className="test-tekst">About me</h1>
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">My Services</h1>
        
        </Col>
    </Row>

    <Row>
        <Col>

        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>

    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">My toolbox</h1>
        
        </Col>
    </Row>

    <Row>
        <Col>
        <Card>
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">My Projects</h1>
        
        </Col>
    </Row>

    <Row>
    <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
    </Row>

    <Row>
    <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
    </Row>

    <Row>
    <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">Living raw boutique</h1>
        
        </Col>
    </Row>

    <Row>
    <Col>
<LivingRaw/>
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">Get in touch</h1>
       
        </Col>
    </Row>
    <Row>
        <Col>
        <GetInTouch />
    </Col>
    </Row>

</Container>

);
}

export default Body;