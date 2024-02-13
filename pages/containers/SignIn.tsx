import qs from 'qs';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Head from 'next/head';

import { useState } from 'react';
import Button from '../components/Button';
import ScopeList from '../components/ScopeList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function SignIn() {
  const router = useRouter();

  const values = [
    'openid',
    'profile',
    'user:profile:read',
    'email',
    'phone',
    'bank:transactions:read',
    'bank:transfers:recipients:read',
    'bank:transfers:read',
    'bank:accounts:read',
    'invoices:read',
    'receipts:read',
  ];
  const [selectedValues, setSelectedValues] = useState(['openid', 'profile', 'user:profile:read']);

  const handleSelectedValuesChange = (newSelectedValues: string[]) => {
    setSelectedValues(newSelectedValues);
  };

  const handleLogin = () => {
    router.push(`/login?${qs.stringify({ scope: selectedValues.join(' ') })}`);
  };

  return (
    <Container>
      <Head>
        <title>Shine Connect</title>
      </Head>
      <h2 style={{ marginBottom: '20px' }}>Select scope that you want to access:</h2>
      <ScopeList values={values} selectedValues={selectedValues} onSelectedValuesChange={handleSelectedValuesChange} />
      <Button text="Login with Shine" onClick={handleLogin} />
    </Container>
  );
}

export default SignIn;
