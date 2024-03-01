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
import { Sidebar, Menu } from 'react-pro-sidebar';
import GetInvoicesForCompany from '../features/GetInvoicesForCompany';

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
  height: 900px;
`;

const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.5em;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

function Authenticated({ authenticatedData }: { authenticatedData: AuthenticatedData }) {
  const [operationOutput, setOperationOutput] = useState<string>(null);
  const [error, setError] = useState<string>(null);

  if (!authenticatedData.authorized) {
    return <SignIn />;
  }

  return (
    <Container>
      <Sidebar width="500">
        <StyledSidebarHeader>General information</StyledSidebarHeader>
        <Menu>
          <GetUserProfile
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <Menu>
          <GetCompanyProfile
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <Menu>
          <GetBankAccounts
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <StyledSidebarHeader>Transactions </StyledSidebarHeader>

        <Menu>
          <GetTransactions
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <Menu>
          <GetTransactionById
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <StyledSidebarHeader>Receipts </StyledSidebarHeader>
        <Menu>
          <GetReceiptForCompany
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <Menu>
          <GetReceiptForTransaction
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>

        <Menu>
          <GetReceiptById
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <StyledSidebarHeader>Invoices </StyledSidebarHeader>
        <Menu>
          <GetInvoicesForCompany
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
      </Sidebar>
      <ContainerOutput>
        <OperationOutput operationOutput={operationOutput} />
        <ErrorOutput error={error} />
      </ContainerOutput>
    </Container>
  );
}

export default Authenticated;
