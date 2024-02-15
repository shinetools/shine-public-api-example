import { Request, Response } from 'express';
import { doRequest } from './doRequest';

const getUserProfile = async (req: Request, res: Response) => {
  const { access_token, uid } = req.query;

  try {
    const data = await doRequest({
      method: 'GET',
      path: `/users/profiles/${uid}`,
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

export default getUserProfile;
