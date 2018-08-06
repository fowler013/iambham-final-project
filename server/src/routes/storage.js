import { Router } from 'express';
import * as UserStorage from '../controllers/storage.ctrl';

let router = Router();

router
    .get('/:userid', UserStorage.all)
    .post('/', UserStorage.create)
    .delete('/:id', UserStorage.destroy);

export default router;
