import React from 'react';
import { Card, CardBody, CardHeader, Col, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Btn, H5, P } from '../../../../AbstractElements';
import { Close, NewMessage, SendMessage, StaticExample } from '../../../../Constant/index';

const StaticModal = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeader className='pb-0'>
          <H5>{StaticExample}</H5>
        </CardHeader>
        <CardBody>
          <div className="modal-dialog modal-lg mt-0 mb-0">
            <div className="modal-dialog mt-0 mb-0">
              <div className="modal-content">
                <ModalHeader>
                  {NewMessage}
                </ModalHeader>
                <ModalBody>
                  <P>{'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'}</P>
                </ModalBody>
                <ModalFooter>
                  <Btn attrBtn={{ color: 'secondary' }}>{Close}</Btn>
                  <Btn attrBtn={{ color: 'primary' }}>{SendMessage}</Btn>
                </ModalFooter>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StaticModal;