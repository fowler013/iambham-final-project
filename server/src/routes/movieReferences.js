import { Router } from 'express';
import base from './base';

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
                    if(id){
                        base.read("spGetUserReviewBasedonRecipeIDandUserID", [num, id]);
                    }
                } else {
                        base.readall("spGetUserReviewsBasedonRecipeID", [num]);
                }
            }
            if (type.includes("user")) {
                if (num) {
                    if (id) {
                        base.read(
                          "spGetUserReviewBasedonRecipeIDandUserID",
                          [id, num]
                        );
                    }
                } else {
                    base.readall("spGetUserReviewsBasedonUserID", [num]);
                }
            } else {
                res.sendStatus(405);
            }
        } else {
            base.readall("spGetUserReviewsBasedonUserID", []);
        }
  })

  .post("/", (req, res, next) => {
      let { actorid, movieid } = req.body
      if (!actorid || !movieid ) {
          res.status(400).send('Invalid Input')
      } else {
          toReferences.addMovieReferences(movieid, actorid)
      }

  })


    .delete("/:id?/:type?", (req, res, next) => {
        let id = req.params.id;
        let type = req.params.type;
        console.log(id);
        console.log(type);
        let theid = id.slice(6)
        if (id) {
            if (id.includes("actor")) {
                if (type) {
                toReferences.removeMovieReferences(type. theid)
                res.sendStatus(200)
                } else {
                toReferences.removeMovieReferencesBasedOnActorID(theid)
                res.sendStatus(200)
                }
            }
            if (id.includes("movie")) {
                if (type) {
                toReferences.removeMovieReferences(theid, type)
                res.sendStatus(200)
                } else {
                toReferences.removeMovieReferencesBasedOnMovieID(theid)
                res.sendStatus(200)
                }
            }
            res.sendStatus(405);
        } else {
            res.sendStatus(405);
        }
  });


export default router;