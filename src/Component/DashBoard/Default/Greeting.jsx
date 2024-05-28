import React, { Fragment } from 'react';
import { Card, CardBody, Col, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { H1, P, Image } from '../../../AbstractElements';
import dashImg from '../../../assets/images/images.svg';

const Greeting = () => {
  return (
    <Fragment>
      <Col xl="12" md="12" className="dash-xl-100 box-col-12">
        <Card className="profile-greeting">
          <CardBody>
            <Media>
              <Media body>
                <div className="greeting-user">
                  <H1>Hello, Alex Turi</H1>
                  <P>Welcome back to, Milton Residents Association!</P>
                  {/* <Link to={`${process.env.PUBLIC_URL}/blog/blogsingle`} className="btn btn-outline-white_color" >
                    Get Started<i className="icon-arrow-right"></i></Link> */}
                  <Link to='' className="btn btn-outline-white_color" >
                    Contact us<i className="icon-arrow-right"></i></Link>
                </div>
              </Media>
            </Media>
            <div className="cartoon-img">
              <Image attrImage={{ className: 'img-fluid', src: `${dashImg}`, alt: '' }} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment >
  );
};
export default Greeting;