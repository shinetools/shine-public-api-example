import { Request, Response } from 'express';
import { doRequest } from './doRequest';

const getInvoicesForCompany = async (req: Request, res: Response) => {
  const { access_token, companyProfileId } = req.query;

  try {
    const data = await doRequest({
      method: 'GET',
      path: `/invoices/query?companyProfileId=${companyProfileId}`,
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

export default getInvoicesForCompany;
