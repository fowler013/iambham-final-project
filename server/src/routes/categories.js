import { Router } from 'express';
import * as StorageCategories from '../controllers/categories.ctrl';

let router = Router();

router.get('/', StorageCategories.all);

export default router;
