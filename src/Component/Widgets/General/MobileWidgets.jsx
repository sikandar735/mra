import React, { Fragment } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import AnalogClock from 'analog-clock-react';
import { P } from '../../../AbstractElements';
import WeatherWidgets from './WeatherWidget';
import ConfigDB from '../../../Config/Theme-Config';

const MobileWidgets = () => {
  const date = { date: new Date() };
  const month = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var d = new Date();
  let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  let options = {
    width: '180px',
    border: true,
    borderColor: '#2e2e2e',
    centerColor: '#459cff',
    centerBorderColor: '#ffffff',
    handColors: {
      second: ConfigDB.data.color.primary_color || localStorage.getItem('default_color'),
      minute: ConfigDB.data.color.secondary_color || localStorage.getItem('secondary_color'),
      hour: '#ffffff'
    }
  };
  return (
    <Fragment>
      <Col xl="6" sm="12" className="box-col-12 xl-100">
        <Card className='o-hidden'>
          <div className="weather-widget-two">
            <CardBody>
              <Row>
                <Col xl='5' md='6'>
                  <div className="mobile-clock-widget">
                    <div>
                      <AnalogClock {...options} />
                      <div id="date" className="date f-24 mb-2">
                        <span>{dateshow}</span>
                        <P attrPara={{ className: 'm-0 f-14 text-light' }}>kolkata, India</P>
                      </div>
                    </div>
                  </div>
                </Col>
                <WeatherWidgets />
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
    </Fragment >
  );
};
export default MobileWidgets;