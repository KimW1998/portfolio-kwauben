import {  Col, Container, Row } from "react-bootstrap";
import AboutMe from "./Components/AboutMe";
import AboutMePhoto from "./Components/AboutMePhoto";
import ButtonSocial from "./Components/ButtonSocial";
import GetInTouch from "./Components/GetInTouch";
import Timeline from "./Components/HorizontalTimeline";
import LivingRaw from "./Components/LivingRawInfo";
import MyWorkBox from "./Components/MyWorkbox";
import ServiceCard from "./Components/ServiceCard";
import SkillsBox from "./Components/SkillsBox";
import HTML5 from './Images/html5.svg'
import CSS from './Images/css.svg'
import React from './Images/reactjs.svg'
import JAVASCRIPT from './Images/js.svg'
import C from './Images/c#.png'
import BootStrap from './Images/bootstrap4.png'
import GitHub from './Images/gitlab.png'
import AdobeIllustrator from './Images/ai.svg'
import Mogustar from './Images/Mogustar (2).png'
import Pokemon from './Images/Pokemon (2).png'
import ReactWeatherapp from './Images/React-Weatherapp.png'
import BasicWeatherap from './Images/Basic-Weatherapp.png'

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
        <SkillsBox imgURL={HTML5} alt="HTML5" name="HTML5" now={100} label="Advanced"/>
      </Col>
      <Col>
        <SkillsBox imgURL={CSS} alt="CSS" name="CSS" now={90} label="Advanced"/>
      </Col>
      <Col>
        <SkillsBox imgURL={React} alt="React" name="React" now={60} label="intermediate"/>
      </Col>
      <Col>
        <SkillsBox imgURL={JAVASCRIPT} alt="JavaScript" name="JavaScript" now={40} label="basic"/>
      </Col>
    </Row>
    <Row className="mb-5">
      <Col>
        <SkillsBox imgURL={C} alt="C sharp" name="C#" now={30} label="basic"/>
      </Col>
      <Col>
        <SkillsBox imgURL={BootStrap} alt="Bootstrap" name="Bootstrap" now={80} label="advanced"/>
      </Col>
      <Col>
        <SkillsBox imgURL={GitHub} alt="Git Hub" name="Git Hub" now={40} label="basic"/>
      </Col>
      <Col>
        <SkillsBox imgURL={AdobeIllustrator} alt="Adobe Illustrator" name="Adobe Illustrator" now={100} label="Advanced"/>
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
        <MyWorkBox src={Mogustar}/>
        </Col>
        <Col className="m-5">
        <MyWorkBox src={Pokemon}/>
        </Col>
    </Row>
    <Row>
    <Col className="m-5">
        <MyWorkBox src={ReactWeatherapp}/>
        </Col>
        <Col className="m-5">
        <MyWorkBox src={BasicWeatherap}/>
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