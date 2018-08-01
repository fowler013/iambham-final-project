import { Router } from 'express';
import base from './base'
import * as Review from '../controllers/reviews.ctrl';
let router = Router();



router
    .get("/", Review.all)
    .get("/:id", Review.read)
    .post("/", Review.create)
    .put("/:id", Review.update)
    .delete("/:id", Review.destroy)

//   .get("recipe/:id", (req, res, next) => {
//       let id = req.params.id;
//       base
//           .readall(
//               "spGetUserReviewBasedonRecipeID",
//               [id]
//           )
//           .then(results => res.send(results));
//   })

//   .get("user/:id", (req, res, next) => {
//       let id = req.params.id;
//       base
//           .readall(
//               "spGetUserReviewBasedonUserID",
//               [id]
//           )
//           .then(results => res.send(results));
//   })

//   .get("/:id", (req, res, next) => {
//       let id = req.params.id;
//       base
//           .read(
//               "spGetUserReview",
//               [id]
//           )
//           .then(results =>
//               res.send(results)
//           );
//   })

//   .post("/", (req, res, next) => {
//     let { recipeid, userid, review, rating } = req.body;
//     if (!review || !rating || !recipeid || !userid) {
//       res.status(400).send("Invalid post");
//     } else {
//       base.create('spCreateUserReview', [userid, recipeid, rating, review])
//       .then(results => res.send(results))
//     }
//   })
//   .put("/:id?", (req, res, next) => {
//     let id = req.params.id;
//       let { recipeid, userid, review, rating } = req.body;
//       if (!review || !rating || !recipeid || !userid) {
//       res.status(400).send("Invalid update");
//     } else {
//       base.update('spUpdateUserReview', [id, +rating, review])
//       res.sendStatus(200)
//     }
//   })

//     .delete("recipe/:id", (req, res, next) => {
//         let id = req.params.id;
//         base
//             .readall(
//                 "spDeleteUserReviewBasedonRecipeID",
//                 [id]
//             )
//             .then(results => res.send(results));
//     })

//     .delete("user/:id", (req, res, next) => {
//         let id = req.params.id;
//         base
//             .readall(
//                 "spDeleteUserReviewBasedonUserID",
//                 [id]
//             )
//             .then(results => res.send(results));
//     })

//     .delete("/:id", (req, res, next) => {
//         let id = req.params.id;
//         base
//             .read(
//                 "spDeleteUserReview",
//                 [id]
//             )
//             .then(results =>
//                 res.send(results)
//             );
//     })
      export default router;