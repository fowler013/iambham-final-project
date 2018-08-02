import { Router } from 'express';
import searchRouter from './api-search';
import userRouter from './users';
import reviewRouter from './reviews';
import favoriteRouter from './favorites';

import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

// AUTH ROUTES
//router.use('/auth', authRouter);
//router.use(isLoggedIn);
//router.route('*')
//    .post(tokenMiddleware, isLoggedIn)
//    .put(tokenMiddleware, isLoggedIn)
//    .delete(tokenMiddleware, isLoggedIn);
/////////

router.use('/search', searchRouter);
router.use('/user', userRouter);
router.use('/review', reviewRouter);
router.use('/favorite', favoriteRouter);

export default router;
