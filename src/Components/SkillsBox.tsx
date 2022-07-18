import { Col, Container, ProgressBar, Row } from "react-bootstrap";


const SkillsBox = (props: { imgURL: string, alt: string, name: string, now: any, label: string; }) => {

    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                    <img src={props.imgURL} alt={props.alt} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h3 className="Small-Text">{props.name}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <ProgressBar now={props.now} label={props.label} />;
                    </Col>
                </Row>
            </Container>
           
    </div>
    );
  }
  
  export default SkillsBox;