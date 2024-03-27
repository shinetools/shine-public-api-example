import { Request, Response } from 'express';
import { publicApiRequest } from '../publicApiRequest';

const getInvoiceById = async (req: Request, res: Response) => {
  const { access_token, invoiceId } = req.query;

  try {
    const data = await publicApiRequest({
      method: 'GET',
      path: `/invoices/${invoiceId}`,
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

export default getInvoiceById;
