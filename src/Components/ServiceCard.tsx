
import { Button, Card } from "react-bootstrap";



const ServiceCard = (props: { title: string, text: string ; }) => {
    return (
        <div>
            <Card className="ServiceCard" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title className="Big-Text">{props.title}</Card.Title>
    <Card.Text className="Small-Text">
      {props.text}
    </Card.Text>
    <Button variant="primary">View My Work</Button>
  </Card.Body>
</Card>
    </div>
    );
  }
  
  export default ServiceCard;