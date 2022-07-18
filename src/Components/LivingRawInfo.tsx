

import { Col, Nav, Row, Tab } from 'react-bootstrap';
import TekstLivingRaw from './TekstLivingRaw';
import TekstMadeToOrderLivingRaw from './TekstMadeToOrderLivingRaw';
import TekstProjectsLivingRaw from './TekstProjectsLivingRaw';
import TekstSkillsLivingRaw from './TekstSkillsLivingRaw';


function LivingRawTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column LivingRawBoutiqueNavItem Small-Text">
            <Nav.Item>
              <Nav.Link eventKey="first" >
                Living Raw Boutique
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" >
                Skills
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" >
                Made To Order
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <TekstLivingRaw />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <TekstSkillsLivingRaw />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <TekstProjectsLivingRaw />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <TekstMadeToOrderLivingRaw />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LivingRawTabs;
        
