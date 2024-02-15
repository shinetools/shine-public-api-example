import next from 'next';
import express from 'express';
import url from 'url';

import { redirectUri, port, dev } from './config';
import * as config from './config';
import login from './login';
import callback from './callback';
import getUserProfile from './routes/userProfile';
import getCompanyProfile from './routes/companyProfile';
import getBankAccounts from './routes/bankAccounts';
import getTransactions from './routes/transactions';
import getTransactionById from './routes/transactionById';
import getReceiptForTransaction from './routes/receiptForTransaction';
import getReceiptById from './routes/receiptById';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log('Loaded configuration', config);

  const redirectUriPath = url.parse(redirectUri).pathname;

  server.get('/login', login);
  server.get(redirectUriPath, callback);
  server.get('/user-profile', getUserProfile);
  server.get('/company-profile', getCompanyProfile);
  server.get('/bank-accounts', getBankAccounts);
  server.get('/transactions', getTransactions);
  server.get('/transaction-by-id', getTransactionById);
  server.get('/receipt-for-transaction', getReceiptForTransaction);
  server.get('/receipt-by-id', getReceiptById);

  server.get('*', (req, res) => handle(req, res));
  server.listen(port, () => console.info(`Server listening on port ${port}`));
});
