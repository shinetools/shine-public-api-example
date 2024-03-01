import React, { useCallback, useState } from 'react';
import Button from '../components/Button';
import axios, { AxiosError } from 'axios';
import { FeatureParams, SContainer, SInput, stringifyResponse } from '../utils';

function GetTransactions({ authenticatedData, setOperationOutput, setError }: FeatureParams) {
  const [bankAccountId, setBankAccountId] = useState('');

  const getTransactions = useCallback(() => {
    setError(null);
    axios
      .get('/transactions', {
        params: {
          bankAccountId,
          access_token: authenticatedData.access_token, // in real world scenario, this should be stored in a your backend
        },
      })
      .then((result) => setOperationOutput(stringifyResponse(result.data)))
      .catch((err: AxiosError) => setError(stringifyResponse(err.response.data)));
  }, [setError, setOperationOutput, authenticatedData, bankAccountId]);

  return (
    <SContainer>
      <SInput
        value={bankAccountId}
        onChange={(e) => setBankAccountId(e.target.value)}
        type="text"
        placeholder="Bank account id"
        size={40}
      />

      <Button key="transactions" text="Get transactions" onClick={getTransactions} />
    </SContainer>
  );
}

export default GetTransactions;
