import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import HTML5 from '../Images/html5.svg'

const SkillsBox = () => {
    const now = 60;
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                    <img src={HTML5} alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3 className="test-tekst">HTML5</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ProgressBar now={now} label={`${now}%`} />;
                    </Col>
                </Row>
            </Container>
           
    </div>
    );
  }
  
  export default SkillsBox;