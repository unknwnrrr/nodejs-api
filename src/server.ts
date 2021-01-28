import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';

import { ApiCodesEnum } from './enums/api.enum';
import { Routes } from './routes';

export class Server {
  private readonly _API_PORT: number = 3000;
  private _app: Application = express();

  constructor() {
    this._init();
  }

  private _init(): void {
    this._app.use(cors());
    this._app.use(bodyParser.json());
    this._app.use('/api', new Routes().router);
    this._app.get('/check', (req: Request, res: Response) => {
      res.status(ApiCodesEnum.Success).send({
        success: 'true',
        message: 'NodeJs Backend up!',
      });
    });
  }

  listen = (callback: (port: number) => void): void => {
    this._app.listen(this._API_PORT, () => {
      callback(this._API_PORT);
    });
  };
}
