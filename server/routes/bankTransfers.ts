import { Request, Response } from 'express';
import { doRequest } from '../doRequest';

const getBankTransfers = async (req: Request, res: Response) => {
  const { access_token, bankAccountId } = req.query;

  try {
    const data = await doRequest({
      method: 'GET',
      path: `/bank/transfers/query?bankAccountId=${bankAccountId}&first=10`,
      authorization: access_token as string,
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(error.status).send({
      status: error.status,
      message: error.body.message,
    });
  }
};

export default getBankTransfers;
