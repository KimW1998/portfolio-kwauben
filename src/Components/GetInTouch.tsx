import { Button, Col, Form, Row } from "react-bootstrap";



const GetInTouch = () => { 
    return (
<div>
  <Row>
<Col className="Big-Text">
 <h1>Drop me a Line.</h1>
 <h1>I would like to hear from you.</h1>
</Col>
<Col>
<Form className="Small-Text">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Fashion Design"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Programming"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
    </Col>
    </Row>
</div>
    );
}
  
  
  export default GetInTouch;
  