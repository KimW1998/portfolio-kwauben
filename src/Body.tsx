import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AboutMe from "./Components/AboutMe";
import AboutMePhoto from "./Components/AboutMePhoto";
import ButtonSocial from "./Components/ButtonSocial";
import GetInTouch from "./Components/GetInTouch";
import Timeline from "./Components/HorizontalTimeline";
import LivingRaw from "./Components/LivingRawInfo";
import MyWorkBox from "./Components/MyWorkbox";
import ServiceCard from "./Components/ServiceCard";
import SkillsBox from "./Components/SkillsBox";

const Body = () => {
    return (
<Container>

    <Row className="mb-5">
        <Col>
        <AboutMePhoto/>
        </Col>
        <Col>
        <AboutMe/>
        </Col>
    </Row>
    <Row className="mb-5">
      <Timeline />
    </Row>
    <Row className="ButtonsSocials mb-5">
      <Col>
      <ButtonSocial />
      </Col>
      <Col>
      <ButtonSocial />
      </Col>
      <Col>
      <ButtonSocial />
      </Col>
      <Col>
      <ButtonSocial />
      </Col>
    </Row>
    <Row className="mb-2">
        <Col>
        <h1 className="test-tekst ItemBorderBox">My Services</h1>
        
        </Col>
    </Row>

    <Row className="ServiceCards mb-5">
        <Col>
        <ServiceCard />
        </Col>
        <Col>
        <ServiceCard />
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst ItemBorderBox mb-2">Skills</h1>
        
        </Col>
    </Row>

    <Row className="mb-5">
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
    </Row>
    <Row className="mb-5">
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
      <Col>
        <SkillsBox />
      </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst ItemBorderBox mb-5">My Work</h1>
        
        </Col>
    </Row>
<Container className="MyWorkBoxes">
    <Row>
    <Col className="m-5">
        <MyWorkBox />
        </Col>
        <Col className="m-5">
        <MyWorkBox />
        </Col>
    </Row>
    <Row>
    <Col className="m-5">
        <MyWorkBox />
        </Col>
        <Col className="m-5">
        <MyWorkBox />
        </Col>
    </Row>
  </Container>

    <Row>
        <Col>
        <h1 className="test-tekst ItemBorderBox mb-5">Living raw boutique</h1>
        
        </Col>
    </Row>

    <Row className="mb-5">
    <Col>
<LivingRaw/>
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst ItemBorderBox mb-5">Get in touch</h1>
       
        </Col>
    </Row>
    <Row className="mb-5">
        <Col>
        <GetInTouch />
    </Col>
    </Row>

</Container>

);
}

export default Body;