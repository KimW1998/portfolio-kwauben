import { Button, Card } from "react-bootstrap";
import KimWauben from '../Images/KimWauben.jpg'

const MyWorkBox = () => {
    return (
        <div>
            
            <Card className="MyWorkBox" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={KimWauben} />
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
           
    </div>
    );
  }
  
  export default MyWorkBox;