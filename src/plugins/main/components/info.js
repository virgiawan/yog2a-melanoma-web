import React, { Fragment, useEffect, useState } from 'react';
import {useService} from 'fusion-react';

import { Button, Card, Header } from 'semantic-ui-react';

import isEmpty from 'lodash/isEmpty';

import {FetcherToken} from '../api/fetcher';


const _ = { isEmpty };

const Info = () => {
  const [news, setNews] = useState([]);
  const [startIndex, setStartIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const Fetcher = useService(FetcherToken);
  const navigateToExternalUrl = (url, shouldOpenNewTab = true) => shouldOpenNewTab ? window.open(url, "_blank") : window.location.href = url;

  const onSubmitNext = () => {
    setIsLoading(true);
    setStartIndex(startIndex + 1);
  }

  useEffect(() => {
    Fetcher.getNews({startIndex}, res => {
      setNews(res.result);
      setIsLoading(false);
    }, alert);
  }, [startIndex]);

  console.log('NEWS', news);

  return (
    <Fragment>
      <Header size='large' style={{marginBottom: 30}}>News and Info About Melanoma</Header>

      {!isLoading && news.map((item, i) => (
        <Card key={i} fluid color='orange'>
          <Card.Content>
            <Card.Header>{item.title}</Card.Header>
            <Card.Meta style={{fontStyle: 'italic'}}>source: {item.displayLink}</Card.Meta>
            <Card.Description>
              <div dangerouslySetInnerHTML={{ __html: item.htmlSnippet }} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic onClick={() => navigateToExternalUrl(item.link)} color='blue'>Open Link</Button>
            </div>
          </Card.Content>
        </Card>
      ))}
      {isLoading && <div style={{marginBottom: 15}}>Loading...</div>}
      <Button basic onClick={onSubmitNext} color='green'>Next Page</Button>
    </Fragment>
  );
};

export default Info;