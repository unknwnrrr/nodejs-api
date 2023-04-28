import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { ApiCodesEnum } from './enums/api.enum';
import { empty } from './utils/validators'

export class Server {
  private readonly _API_PORT: number = 3000;
  public _app: Application = express();

  constructor() {
    this._init();
  }

  private _init(): void {
    this._app.use(cors());
    this._app.use(bodyParser.json());
    this._app.get('/check', (req: Request, res: Response) => {
      res.status(ApiCodesEnum.Success).send({
        success: 'true',
        message: 'NodeJs Backend up!',
      });
    });

    this._app.post('/DevOps', (req: Request, res: Response) => {
      try {
        const { to }: { to: string } = req.body;
        const reciever: string = to;
        if (empty(reciever)) {
          throw new Error(`El campo TO es inávalido`);
        }
        res.send({ message: `Hello ${reciever} your message will be send` });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
      }
    });
    this._app.get('/DevOps', (req: Request, res: Response) => {
      try {
        throw new Error(`ERROR`);
      } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
      }
    });
    this._app.put('/DevOps', (req: Request, res: Response) => {
      try {
        throw new Error(`ERROR`);
      } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
      }
    });
    this._app.delete('/DevOps', (req: Request, res: Response) => {
      try {
        throw new Error(`ERROR`);
      } catch (error) {
        console.error(error);
        res.status(500).json(error.message);
      }
    });
  }

  listen = (callback: (port: number) => void): void => {
    this._app.listen(this._API_PORT, () => {
      callback(this._API_PORT);
    });
  };
}
