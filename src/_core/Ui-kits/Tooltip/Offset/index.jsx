import { Btn, H5, ToolTip } from '../../../../AbstractElements';
import { Offsets } from '../../../../Constant/index';
import OffsetTooltip from './OffsetsTooltip';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import React, { useState } from 'react';

const Offset = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const Data = [
    {
      id: 10,
      placement: 'top',
      tooltip: 'Tooltip title',
      btntext: '0px -20px',
      offset: '0px,20px'
    },
    {
      id: 11,
      placement: 'top',
      tooltip: 'Tooltip title',
      btntext: '20px 0px',
      offset: '20px,0px'
    },
    {
      id: 12,
      placement: 'top',
      tooltip: 'Tooltip title',
      btntext: '-30px -30px',
      offset: '-30px,-0px'
    }
  ];
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{Offsets}</H5>
        </CardHeader>
        <CardBody>
          <div className="btn-showcase">
            <Btn attrBtn={{ color: 'primary', id: 'Tooltip-9', onClick: toggle }}>20px 20px</Btn>
            <ToolTip
              attrToolTip={{
                placement: 'top',
                isOpen: tooltip,
                target: 'Tooltip-9',
                toggle: toggle,
                offset: [20, 20]
              }} >
              {'Tooltip title'}
            </ToolTip>
            {Data.map((item, i) =>
              <OffsetTooltip key={i} item={item} />
            )}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;