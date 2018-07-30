import { Router } from 'express';
import base from './base'
let router = Router();



router

  .get("recipe/:id", (req, res, next) => {
      let id = req.params.id;
      base
          .readall(
              "spGetUserReviewBasedonRecipeID",
              [id]
          )
          .then(results => res.send(results));
  })

  .get("user/:id", (req, res, next) => {
      let id = req.params.id;
      base
          .readall(
              "spGetUserReviewBasedonUserID",
              [id]
          )
          .then(results => res.send(results));
  })

  .get("/:id", (req, res, next) => {
      let id = req.params.id;
      base
          .read(
              "spGetUserReview",
              [id]
          )
          .then(results =>
              res.send(results)
          );
  })

  .post("/", (req, res, next) => {
    let { recipeid, userid, review, rating } = req.body;
    if (!review || !rating || !recipeid || !userid) {
      res.status(400).send("Invaid post");
    } else {
      res.send("got post");
      // base.create('spCreateUserReview', [userid, recipeid, rating, review])
      // .then(results => res.send(results))
    }
  })
  .put("/:id?", (req, res, next) => {
    let id = req.params.id;
      let { recipeid, userid, review, rating } = req.body;
      if (!review || !rating || !recipeid || !userid) {
      res.status(400).send("Invaid update");
    } else {
      res.send("got update");
      // base.update('spUpdateUserReview', [id, +rating, review])
      // res.sendStatus(200)
    }
  })

    .delete("recipe/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spDeleteUserReviewBasedonRecipeID",
                [id]
            )
            .then(results => res.send(results));
    })

    .delete("user/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .readall(
                "spDeleteUserReviewBasedonUserID",
                [id]
            )
            .then(results => res.send(results));
    })

    .delete("/:id", (req, res, next) => {
        let id = req.params.id;
        base
            .read(
                "spDeleteUserReview",
                [id]
            )
            .then(results =>
                res.send(results)
            );
    })
      export default router;