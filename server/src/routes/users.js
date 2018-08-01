import { Router } from 'express';
import * as Users from '../controllers/users.ctrl';

let router = Router();

router
  .get('/', Users.all)
  .get('/:id', Users.read)
  .post('/', Users.create)
  .put('/:id', Users.update)
  .delete('/:id', Users.destroy);

export default router;