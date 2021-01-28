import { Request, Response } from 'express';

export const testingDatabase = (req: Request, res: Response) => {
  try {
    const data: string = 'this is my message';
    // const queryResult = await client.query('SELECT * from alembic_version');
    // const data = queryResult.rows;
    res.send(data);
  } catch (error) {
    res.json(error);
    console.error(error);
  }
};
