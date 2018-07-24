
import { Router } from 'express';
import searchRouter from './api-search';
require("isomorphic-fetch");

let router = Router();

router.use('/search', searchRouter);


export default router;