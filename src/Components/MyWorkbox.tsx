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
            
            <Card className="MyWorkBox" style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" src={props.src} />
  <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
    <Card.Title className="text-left Big-Text">{props.title}</Card.Title>
    <Card.Text className="text-left ">
      {props.text}
    </Card.Text>
    <Card.Subtitle className="mb-2 text-left">{props.used}</Card.Subtitle>
    <div style={{marginTop: '19px', paddingTop: '15px'}}>
    <Row>
      <Col>
    <Button variant="primary">Live Demo</Button>
    </Col>
    <Col>
    <a  href="https://github.com/KimW1998" target="_blank" rel="noreferrer" ><img src={GitHub} alt="Link to projects github" width={70} /></a>
    </Col>
    </Row>
    </div>
   
  </Card.Body>
</Card>
           
    </div>
    );
  }
  
  export default MyWorkBox;