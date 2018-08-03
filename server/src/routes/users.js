import { Router } from 'express';
import * as Users from '../controllers/users.ctrl';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';

let router = Router();

router
  .get('/', Users.all)
  .get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    res.json(req.user);
  })
  .get('/:id', Users.read)
  .post('/', Users.create)
  .put('/:id', Users.update)
  .delete('/:id', Users.destroy);

export default router;