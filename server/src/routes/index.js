import { Router } from 'express';
import searchRouter from './api-search';
import userRouter from './users';
import reviewRouter from './reviews';
import favoriteRouter from './favorites';

let router = Router();

router.use('/search', searchRouter);
router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/favorite', favoriteRouter);

export default router;
