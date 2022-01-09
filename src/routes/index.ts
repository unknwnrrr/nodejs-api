import { Router } from 'express';

import { UserRoutes } from './user.routes';

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.setRoutes();
  }

  setRoutes() {
    this.router.use('/userTesting', new UserRoutes().router);
  }
}
