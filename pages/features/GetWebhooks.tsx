import React, { useCallback } from 'react';
import Button from '../components/Button';
import axios, { AxiosError } from 'axios';
import { FeatureParams, SContainer, stringifyResponse } from '../utils';

function GetWebhooks({ authenticatedData, setOperationOutput, setError }: FeatureParams) {
  const getWebhooks = useCallback(() => {
    setError(null);
    axios
      .get('/webhook')
      .then((result) => setOperationOutput(stringifyResponse(result.data)))
      .catch((err: AxiosError) => setError(stringifyResponse({ status: err.response.status, text: err.message })));
  }, [setError, setOperationOutput, authenticatedData]);

  return (
    <SContainer>
      <Button key="webhooks" text="Get Webhooks" onClick={getWebhooks} />
    </SContainer>
  );
}

export default GetWebhooks;
