import React, { useState } from 'react';
import styled from 'styled-components';

import GetUserProfile from '../features/GetUserProfile';
import OperationOutput from '../components/OperationOutput';
import ErrorOutput from '../components/ErrorOutput';
import SignIn from './SignIn';
import { AuthenticatedData } from '../utils';
import GetCompanyProfile from '../features/GetCompanyProfile';
import GetBankAccounts from '../features/GetBankAccounts';
import GetTransactions from '../features/GetTransactions';
import GetTransactionById from '../features/GetTransactionById';
import GetReceiptForTransaction from '../features/GetReceiptForTransaction';
import GetReceiptById from '../features/GetReceiptById';
import GetReceiptForCompany from '../features/GetReceiptForCompany';

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

const ContainerOutput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: scroll;
  height: 800px;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  border-right: 10px solid #eee;
`;

function Authenticated({ authenticatedData }: { authenticatedData: AuthenticatedData }) {
  const [operationOutput, setOperationOutput] = useState<string>(null);
  const [error, setError] = useState<string>(null);

  if (!authenticatedData.authorized) {
    return <SignIn />;
  }

  return (
    <Container>
      <SideBar>
        <GetUserProfile
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetCompanyProfile
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetBankAccounts
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetTransactions
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetTransactionById
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetReceiptForTransaction
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetReceiptForCompany
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
        <GetReceiptById
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />
      </SideBar>
      <ContainerOutput>
        <OperationOutput operationOutput={operationOutput} />
        <ErrorOutput error={error} />
      </ContainerOutput>
    </Container>
  );
}

export default Authenticated;
