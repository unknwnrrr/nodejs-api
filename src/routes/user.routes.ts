import { Router } from 'express';

import { testingDatabase } from '../controllers/user.controller';

export class UserRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.config();
  }

  config() {
    this.router.get('/', testingDatabase);
    this.router.get('/:userId', testingDatabase);
    // this.router.post('/', guardarDatosFirma);
    // this.router.put('/:userId', actualizarDatosFirma);
    // this.router.delete('/:userId', eliminarDatosFirma);
  }
}
