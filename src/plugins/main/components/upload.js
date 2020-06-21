import React, {Fragment, useState, useEffect} from 'react';
import {useLocation} from 'fusion-plugin-react-router';
import { Button, Form, Image, Icon, Segment, Dimmer, Loader } from 'semantic-ui-react';
import fetch from 'isomorphic-fetch';
import { Base64 } from 'js-base64';

import isEmpty from 'lodash/isEmpty';

const _ = {
  isEmpty
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Upload = (props) => {
  let query = useQuery();
  const [file, setFile] = useState(null);
  const [isSelected, setSelectedStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState({});

  const onFileChange = (fileData) => {
    if(!isSelected) {
      setFile(prev => {
        return fileData;
      });
      setSelectedStatus(true);
    }
  }

  const onClickChooseOther = () => {
    setSelectedStatus(false);
    setFile(null);
    setLoading(false);
    setPrediction({});
  }

  const onFormSubmit = () =>{
    setLoading(true)
    const data = new FormData();
    data.append('file', file);
    fetch('/api/uploadImage', {
      method: 'POST',
      body: data
    })
      .then(async res => await res.json())
      .then(res => {
        setPrediction(res);
        setLoading(false);
      });
  }

  useEffect(() => {
    if (!_.isEmpty(prediction)) {
      const nextPath = query.get('user');
      const {result: {predicted, probability}} = prediction;
      const ohQuery = JSON.stringify({predicted, probability});
      const encode = Base64.encode(ohQuery);

      location.href = `/${nextPath}?oh=${encode}`
    }
  }, [prediction]);


  console.log('File', query.get('user'));


  return (
    <Fragment>
      {isSelected && <div style={{marginBottom: 10, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div>
          <p><strong>Selected Image: </strong>{file.name}</p>
          <Segment>
            {isLoading && <Dimmer active>
              <Loader indeterminate>Please wait.. We are analyzing your image...</Loader>
            </Dimmer>}

            <Image src={URL.createObjectURL(file)} rounded fluid />
          </Segment>

          {!isLoading && <Button onClick={onClickChooseOther} style={{marginTop: 10}}>
            <Icon name="close" />  Choose other image
          </Button>}
        </div>
      </div>}

      <Form onSubmit={onFormSubmit}>
        <Form.Field>
          {!isSelected && <Button as="label" htmlFor="file" type="button">
            Click here to upload your skin image
          </Button>}
          <input type="file" id="file" hidden onChange={event => onFileChange(event.target.files[0])} />
        </Form.Field>

        {isSelected && !isLoading && <Button type="submit">Process</Button>}
      </Form>
    </Fragment>
  );
};

export default Upload;