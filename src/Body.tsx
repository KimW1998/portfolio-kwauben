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

    <Row>
        <Col>
        <AboutMePhoto/>
        </Col>
        <Col>
        <AboutMe/>
        </Col>
    </Row>
    <Row>
      <Timeline />
    </Row>
    <Row className="ButtonsSocials">
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
    <Row>
        <Col>
        <h1 className="test-tekst">My Services</h1>
        
        </Col>
    </Row>

    <Row>
        <Col>
        <ServiceCard />
        </Col>
        <Col>
        <ServiceCard />
        </Col>
    </Row>

    <Row>
        <Col>
        <h1 className="test-tekst">Skills</h1>
        
        </Col>
    </Row>

    <Row>
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
        <h1 className="test-tekst">My Projects</h1>
        
        </Col>
    </Row>

    <Row>
    <Col>
        <MyWorkBox />
        </Col>
        <Col>
        <MyWorkBox />
        </Col>
    </Row>
    <Row>
    <Col>
        <MyWorkBox />
        </Col>
        <Col>
        <MyWorkBox />
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