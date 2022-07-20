import { Col, Container, ProgressBar, Row } from "react-bootstrap";


const SkillsBox = (props: { imgURL: string, alt: string, name: string, now: any, label: string; }) => {

    return (
        <div className="col-md-6 col-lg-3">
            
            <Container>
                <Row>
                    <Col className="col-12">
                    <img src={props.imgURL} alt={props.alt} />
                    <h3 className="Small-Text">{props.name}</h3>
                    <ProgressBar now={props.now} label={props.label} />;
                    </Col>    
                </Row>
                
                
            </Container>
           
    </div>
    );
  }
  
  export default SkillsBox;