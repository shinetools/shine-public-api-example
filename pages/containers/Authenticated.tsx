import React, { useState } from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import GetUserProfile from '../components/GetUserProfile';
import OperationOutput from '../components/OperationOutput';
import ErrorOutput from '../components/ErrorOutput';
import SignIn from './SignIn';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100vh;
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 30%;
  border-right: 10px solid #eee;
`;

function Authenticated({ authenticatedData }) {
  const [operationOutput, setOperationOutput] = useState(null);
  const [error, setError] = useState(null);

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
      </SideBar>
      <OperationOutput operationOutput={operationOutput} />
      <ErrorOutput error={error} />
    </Container>
  );
}

export default Authenticated;
