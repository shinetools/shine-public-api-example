import { Dispatch } from 'react';

export type AuthenticatedData = {
  access_token: string;
  authorized: string;
  companyProfileId: string;
  companyUserId: string;
  refresh_token: string;
  uid: string;
};

export type FeatureParams = {
  authenticatedData: AuthenticatedData;
  setOperationOutput: Dispatch<string>;
  setError: Dispatch<string>;
};

export const stringifyResponse = (data: unknown) => JSON.stringify(data, null, 2);
