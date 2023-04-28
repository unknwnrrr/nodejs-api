import { Request, Response } from 'express';

export const testingDatabase = (req: Request, res: Response) => {
  try {
    const data: string = 'this is my message';
    res.send(data);
  } catch (error) {
    res.json(error);
    console.error(error);
  }
};
