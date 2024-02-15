import React, { useCallback, useState } from 'react';
import Button from '../components/Button';
import axios, { AxiosError } from 'axios';
import { FeatureParams, stringifyResponse } from '../utils';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f5f5f5;
  height: 90px;
  margin: 10px 0;
  padding-left: 40px;
  padding-right: 40px;
  border: 0;
  z-index: 1;
  border-radius: 20px;
  font-size: 16px;
`;

const Input = styled.input`
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    marginBottom: '10px'
`;
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
    <Container>
      <Input
        value={bankAccountId}
        onChange={(e) => setBankAccountId(e.target.value)}
        type="text"
        placeholder="Bank account id"
        size={40}
      />
      <Button key="transactions" text="Get transactions" onClick={getTransactions} />
    </Container>
  );
}

export default GetTransactions;
