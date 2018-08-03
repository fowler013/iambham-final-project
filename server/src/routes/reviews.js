import { Router } from 'express';
import base from './base'
import * as Review from '../controllers/reviews.ctrl';
let router = Router();



router
    .get("/", Review.all)
    .get("/:id", Review.read)
    .get("/recipe/:id", Review.readByRecipeId)
    .get("/user/:id", Review.readByUserId)
    .post("/", Review.create)
    .put("/:id", Review.update)
    .delete("/:id", Review.destroy)
    .delete("/recipe/:id", Review.deleteByRecipeId)
    .delete("/user/:id", Review.deleteByUserId)


      export default router;