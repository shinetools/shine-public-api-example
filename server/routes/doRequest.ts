import axios from 'axios';
import { shineApiHost, isLocal } from '../config';

const addLoadBalancerHeaders = () => ({
  public_load_balancer: 'true',
  client_cert_present: 'false',
  client_cert_chain_verified: 'false',
  client_cert_error: '',
  client_cert_sha256_fingerprint: 'xxxxx',
  client_cert_serial_number: 'xxxxx',
  client_cert_valid_not_before: new Date().toISOString(),
  client_cert_valid_not_after: new Date().toISOString(),
  client_cert_uri_sans: 'xxxxx',
  client_cert_dnsname_sans: 'xxxxx',
});

export type DoRequestParams = { method: string; path: string; authorization: string; payload?: unknown };
export const convertObjectToString = (payload: unknown) => {
  if (!payload) return null;
  try {
    const postData = JSON.stringify(payload);
    console.log({ postData });
    return postData;
  } catch (error) {
    throw error;
  }
};

export const doRequest = async (params: DoRequestParams) => {
  const { method, path, authorization, payload } = params;
  const postData = convertObjectToString(payload);

  // Make the HTTPS request
  return axios
    .request({
      url: shineApiHost + path,
      method,
      headers: {
        ...(postData
          ? {
              'Content-Length': postData.length,
              'Content-Type': 'application/json',
            }
          : {}),
        ...(isLocal ? addLoadBalancerHeaders() : {}),
        Authorization: `Bearer ${authorization}`,
      },
      data: payload,
    })
    .then((res) => {
      return {
        body: res.data,
        status: res.status,
      };
    })
    .catch((e) => {
      console.error(e.message);
      return {
        body: e.message,
        status: 500,
      };
    });
};
