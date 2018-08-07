import { Router } from 'express';
import * as UserStorage from '../controllers/storage.ctrl';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router
    .get('/:userid', tokenMiddleware, isLoggedIn, UserStorage.all)
    .post('/', tokenMiddleware, isLoggedIn, UserStorage.create)
    .delete('/:id', tokenMiddleware, isLoggedIn, UserStorage.destroy);

export default router;
