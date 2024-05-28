import React, { Fragment } from 'react';
import { Container, Row } from 'reactstrap'; 
import Greeting from './Greeting';
import Earnings from './Earnings';
import OutgoingProject from './OutgoingProject';
import NewsUpdates from './NewsUpdate';
import RecentActivitys from './RecentActivitys';  

const DefaultContain = () => {
  const val = true;
  return (
    <Fragment>
      <Container fluid={true} className="default-dash">
        <Row>
          <Greeting />
          <Earnings /> 
          <OutgoingProject val={val} />
          {/* <NewsUpdates /> */}
          {/* <RecentActivitys /> */} 
        </Row>
      </Container>
    </Fragment>
  );
};
export default DefaultContain;