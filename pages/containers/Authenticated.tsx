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
import GetBankTransfers from '../features/GetBankTransfers';
import GetBankTransferById from '../features/GetBankTransferById';
import GetInvoiceById from '../features/GetInvoiceById';
import GetInvoiceMappings from '../features/GetInvoiceMappings';

const Container = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

const ContainerOutput = styled.div`
  flex-direction: row;
  height: 900px;
`;

const StyledSidebarHeader = styled.div`
  height: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 1.4em;

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
        <StyledSidebarHeader>Bank information</StyledSidebarHeader>
        <Menu>
          <GetBankAccounts
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>

        <StyledSidebarHeader>Transfers </StyledSidebarHeader>
        <GetBankTransfers
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />

        <GetBankTransferById
          setOperationOutput={setOperationOutput}
          setError={setError}
          authenticatedData={authenticatedData}
        />

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
        <Menu>
          <GetInvoiceById
            setOperationOutput={setOperationOutput}
            setError={setError}
            authenticatedData={authenticatedData}
          />
        </Menu>
        <StyledSidebarHeader>Transaction enrichment </StyledSidebarHeader>

        <Menu>
          <GetInvoiceMappings
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
