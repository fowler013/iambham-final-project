
import { Router } from 'express';
import searchRouter from './api-search';


let router = Router();

router.use('/search', searchRouter);


export default router;