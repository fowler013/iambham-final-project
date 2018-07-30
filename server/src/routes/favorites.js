import { Router } from 'express';
import { row, rows } from '../config/db'
import base from './base'
let router = Router();


router

    .get("recipe/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spGetFavoriteBasedonRecipeID",
                [id]
            )
            .then(results => res.send(results));
    })

    .get("user/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spGetFavoriteBasedonUserID",
                [id]
            )
            .then(results => res.send(results));
    })

    .get("/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .read(
                "spGetFavorite",
                [id]
            )
            .then(results =>
                res.send(results)
            );
    })

    .post("/", (req, res, next) => {
        let { recipeid, userid} = req.body;
        if (!recipeid || !userid) {
            res.status(400).send("Invaid post");
        } else {
            base.create('spCreateFavorites', [userid, recipeid])
            .then(results => res.send(results))
        }
    })
    // .put("/:id?", (req, res, next) => {
    //     let id = req.params.id;
    //     let { recipeid, userid, review, rating } = req.body;
    //     if (!review || !rating || !recipeid || !userid) {
    //         res.status(400).send("Invaid update");
    //     } else {
    //         res.send("got update");
    //         // base.update('spUpdateFavorites', [id, +rating, review])
    //         // res.sendStatus(200)
    //     }
    // })

    .delete("recipe/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spDeleteFavoritesBasedonRecipeID",
                [id]
            )
            .then(results => res.send(results));
    })

    .delete("user/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spDeleteFavoritesBasedonUserID",
                [id]
            )
            .then(results => res.send(results));
    })

    .delete("/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .read(
                "spDeleteFavorites",
                [id]
            )
            .then(results =>
                res.send(results)
            );
    })
export default router;