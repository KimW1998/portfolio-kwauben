import { Button, Card, Col, Row } from "react-bootstrap";
import GitHub from '../Images/gitlab.png'

const MyWorkBox = (props: {
  GithubLink: string;
  text: string;
  title: string; 
  src: string; 
  used: string;
}) => {
    return (
        <div>
            
            <Card className="MyWorkBox" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.src} />
  <Card.Body>
    <Card.Title className="text-left">{props.title}</Card.Title>
    <Card.Text className="text-left">
      {props.text}
    </Card.Text>
    <Card.Subtitle className="mb-2 text-left">{props.used}</Card.Subtitle>
    <Row>
      <Col>
    <Button variant="primary">Live Demo</Button>
    </Col>
    <Col>
    <a href="https://github.com/KimW1998" target="_blank" rel="noreferrer" ><img src={GitHub} alt="Link to projects github" width={70} /></a>
    
    </Col>
    </Row>
  </Card.Body>
</Card>
           
    </div>
    );
  }
  
  export default MyWorkBox;