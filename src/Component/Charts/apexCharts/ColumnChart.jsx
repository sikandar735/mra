import React, { Fragment } from 'react';
import Chart from 'react-apexcharts';
import { Card, CardBody, Col } from 'reactstrap';
import { ColumnChart } from '../../../Constant/index';
import CommenHeader from '../Commen';
import { apexColumnChartsone } from './apexData';

const ColumnChartClass = () => {
  return (
    <Fragment>
      <Col sm='12' xl='12' className='box-col-12'>
        <Card>
          <CommenHeader title={ColumnChart} />
          <CardBody>
            <div id='column-chart'>
              <Chart options={apexColumnChartsone.options} series={apexColumnChartsone.series} type="bar" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ColumnChartClass;