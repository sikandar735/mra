import React, { Fragment } from 'react';
import { Card, CardBody, CardHeader, Col } from 'reactstrap';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import { H5 } from '../../../AbstractElements';
import { HtmlData } from './data';

const HtmlMode = () => {
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <CardHeader className="pb-0">
            <H5>HTML Mode</H5>
          </CardHeader>
          <CardBody>
            <AceEditor
              style={{ marginTop: '0px', width: '663px', height: '428px', marginLeft: '0px' }}
              mode="html"
              theme="monokai"
              value={HtmlData}
              name="blah2"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              setOptions={{ useWorker: false }}
              editorProps={{ $blockScrolling: true }}
              highlightActiveLine={true}
            />
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default HtmlMode;