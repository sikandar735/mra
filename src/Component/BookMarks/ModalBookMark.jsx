import React, { Fragment, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Label, Modal, ModalBody, ModalHeader, Row, Input } from 'reactstrap';
import { Btn } from '../../AbstractElements';
import { AddBookmark, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from '../../Constant';
import BookmarkContext from '../../_helper/bookmark';

const BookmarkModal = (props) => {
  const { value = '', addToggle = '' } = props;
  const { addNewBookmark } = useContext(BookmarkContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit1 = (data) => {
    if (data !== '') {
      addNewBookmark(data, 'lightgallry/01.jpg');
    } else {
      errors.showMessages();
    }
  };
  return (
    <Fragment>
      <Modal isOpen={value} toggle={addToggle} size="lg" className='modal-bookmark'>
        <ModalHeader>{AddBookmark}
          <Btn attrBtn={{ color: 'transprant', className: 'btn-close', onClick: addToggle, type: 'button', databsdismiss: 'modal', arialabel: 'Close' }}></Btn>
        </ModalHeader>
        <ModalBody>
          <Form
            className="form-bookmark needs-validation"
            onSubmit={handleSubmit(onSubmit1)} >
            <div className="form-row">
              <FormGroup className="col-md-12">
                <Label>{WebUrl}</Label>
                <input className="form-control" name="url" type="text" autoComplete="off"
                  {...register('url', { required: true })} />
                <span style={{ color: 'red' }}>
                  {errors.url && 'Url is required'}
                </span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Title}</Label>
                <input className="form-control" name="title" type="text" autoComplete="off"
                  {...register('title', { required: true })} />
                <span style={{ color: 'red' }}>
                  {errors.title && 'Title is required'}
                </span>
              </FormGroup>
              <FormGroup className="col-md-12">
                <Label>{Description}</Label>
                <input className="form-control" name="desc" type="textarea"
                  autoComplete="off" {...register('desc', { required: true })} />
                <span style={{ color: 'red' }}>
                  {errors.desc && 'Description is required'}
                </span>
              </FormGroup>
              <Row>
                <FormGroup className="col mb-0">
                  <Label>{Group}</Label><br />
                  <select className="form-control digits" name="group">
                    <option value="bookmark">
                      {MyBookmarks}
                    </option>
                  </select>
                </FormGroup>
                <FormGroup className="col mb-0" >
                  <Label>{Collection}</Label><br />
                  <select className=" form-control digits" name="collection">
                    <option value="general">{General}</option>
                    <option value="fs">{'fs'}</option>
                  </select>
                </FormGroup>
              </Row>
            </div>
            <Btn attrBtn={{ color: 'secondary', type: 'submit' }}>{Save}</Btn>&nbsp;&nbsp;
            <Btn attrBtn={{ color: 'primary', onClick: addToggle }}>{Cancel}</Btn>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default BookmarkModal;