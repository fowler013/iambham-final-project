import { Router } from 'express';
import { row, rows } from '../config/db'
import base from './base'
let router = Router();


router
    .get("/:type?/:num?/:id?", (req, res, next) => {

        // type is for users or recipes // num is for a specific recipe or user // id is for a specific user or recipe for a recipe or user

        let type = req.params.type;
        let num = req.params.num;
        let id = req.params.id;
        console.log(id);
        console.log(type);
        console.log(num);

        if (type) {
            if (type.includes("recipe")) {
                if (num) {
                    if (id) {
                        base
                            .read(
                                "spGetFavoritesBasedonRecipeIDandUserID",
                                [num, id]
                            )
                            .then(results =>
                                res.send(results)
                            );
                    }
                } else {
                    base
                        .readall(
                            "spGetFavoritesBasedonRecipeID",
                            [num]
                        )
                        .then(results => res.send(results));
                }
            }
            if (type.includes("user")) {
                if (num) {
                    if (id) {
                        base
                            .read(
                                "spGetFavoritesBasedonRecipeIDandUserID",
                                [id, num]
                            )
                            .then(results =>
                                res.send(results)
                            );
                    }
                } else {
                    base
                        .readall(
                            "spGetFavoritesBasedonUserID",
                            [num]
                        )
                        .then(results => res.send(results));
                }
            } else {
                res.sendStatus(405);
            }
        } else {
            base
                .readall("spGetFavorites", [])
                .then(results => res.send(results));
        }
    })

    .post('/', (req, res, next) => {
        let { recipeid, userid, review, rating } = req.body
        if (!review || !rating || !recipeid || !userid) {
            res.status(400).send("Invaid post")
        } else {
            res.send('got post')
            // base.create('spCreateFavorite', [userid, recipeid, rating, review])
            // .then(results => res.send(results))            
        }

    })
    .put('/:id?', (req, res, next) => {
        let { rating, review } = req.body;
        let id = req.params.id;
        if (!review || !rating) {
            res.status(400).send("Invaid update")
        } else {
            res.send('got update')
            // base.update('spUpdateFavorites', [id, +rating, review])
            // res.sendStatus(200)
        }
    })

    .delete("/:type?/:num?/:id?", (req, res, next) => {

        // type is for users or recipes // num is for a specific recipe or user // id is for a specific user or recipe for a recipe or user

        let type = req.params.type;
        let num = req.params.num;
        let id = req.params.id;
        console.log(id);
        console.log(type);
        console.log(num);

        if (type) {
            if (type === "recipe") {
                if (num) {
                    if (id) {
                        base
                            .destroy(
                                "spDeleteFavoriteBasedonRecipeIDandUserID",
                                [num, id]
                            );
                    }
                } else {
                    base
                        .destory(
                            "spDeleteFavoritesBasedonRecipeID",
                            [num]
                        );
                }
            }
            if (type === "user") {
                if (num) {
                    if (id) {
                        base
                            .destory(
                                "spDeleteFavoriteBasedonRecipeIDandUserID",
                                [id, num]
                            );
                    }
                } else {
                    base
                        .destory(
                            "spDeleteFavoritesBasedonUserID",
                            [num]
                        );
                }
            } else {
                res.sendStatus(405);
            }
        } else {
            res.sendStatus(405);
        }
    })

export default router;