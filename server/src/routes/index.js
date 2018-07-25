
import { Router } from 'express';
import searchRouter from './api-search';
import userRouter from './users';
import "isomorphic-fetch";

let router = Router();

router.use('/search', searchRouter);
router.use('/user/', userRouter);

export default router;