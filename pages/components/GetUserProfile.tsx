import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import axios, { AxiosError } from 'axios';

const stringifyResponse = (data: unknown) => JSON.stringify(data, null, 2);

function GetUserProfile({ authenticatedData, setOperationOutput, setError }) {
  const getUserProfile = useCallback(() => {
    setError(null);
    axios
      .get('/user-profile', {
        params: {
          access_token: authenticatedData.access_token,
          refresh_token: authenticatedData.refresh_token,
          uid: authenticatedData.uid,
        },
      })
      .then((result) => setOperationOutput(stringifyResponse(result.data)))
      .catch((err: AxiosError) => setError(stringifyResponse(err.response.data)));
  }, [setError, setOperationOutput, authenticatedData]);

  return <Button key="userProfile" text="Get user profile" onClick={getUserProfile} />;
}

GetUserProfile.propTypes = {
  authenticatedData: PropTypes.shape({
    access_token: PropTypes.string,
    refresh_token: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setOperationOutput: PropTypes.func.isRequired,
  setError: PropTypes.func.isRequired,
};

export default GetUserProfile;
