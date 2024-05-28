import { H5, P } from '../../AbstractElements';
import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const SamplePageContain = () => {
    return (
      <Fragment>
        <Container fluid={true}>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className="pb-0">
                  <H5>Sample Card</H5><span>lorem ipsum dolor sit amet, consectetur adipisicing elit</span>
                </CardHeader>
                <CardBody>
                  <P>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</P>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
};
export default SamplePageContain;