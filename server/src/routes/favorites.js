import { Router } from 'express';
import * as Favorites from '../controllers/favorites.ctrl';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();


router
    .get('/', Favorites.all)
    .get('/:id', Favorites.read)
    .get('/recipe/:id', Favorites.readByRecipeId)
    .get('/user/:id', tokenMiddleware, isLoggedIn, Favorites.readByUserId)
    .post('/', tokenMiddleware, isLoggedIn, Favorites.create)
    .put('/:id', Favorites.update)
    .delete('/:id', tokenMiddleware, isLoggedIn, Favorites.destroy)
    .delete('/user/:id', Favorites.deleteByUserId)
    .delete('/', Favorites.deleteByRecipeIdAndUserId);


export default router;