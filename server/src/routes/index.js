
import { Router } from 'express';
import searchRouter from './api-search';
import userRouter from './users';
import reviewRouter from './reviews';
import "isomorphic-fetch";

let router = Router();

router.use('/search', searchRouter);
router.use('/user/', userRouter);
router.use('/review/', reviewRouter);
export default router;