import * as ReviewProcedures from '../procedures/reviews';
import * as ReviewValidators from '../validators/reviews';

export function all(req, res, next) {
    ReviewProcedures.all()
        .then((reviews) => {
            res.json(reviews);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function read(req, res, next) {
    let id = req.params.id;
   
    ReviewValidators.read({
        id
    })
        .then((sqlArgs) => {
            return ReviewProcedures.read(sqlArgs);
        })
        .then((review) => {
            res.json(review);
        })
        .catch((err) => {
            console.error(err);
        });
}

export function create(req, res, next) {
    let { userid, recipeid, review, ratings } = req.body;

    ReviewValidators.create({
        userid,
        recipeid,
        review,
        ratings
    })
        .then((sqlArgs) => {
            return ReviewProcedures.create(sqlArgs);
        })
        .then((review) => {
            res.json(review);
        })
        .catch((err) => {
            console.error(err);
        });
}



export function update(req, res, next) {
    let id = req.params.id;
    let { review, ratings } = req.body;

    ReviewValidators.update({
        id,
        ratings,
        review
    })
        .then((sqlArgs) => {
            return ReviewProcedures.update(sqlArgs);
        })
        .then((review) => {
            res.json(review);
        }).catch((err) => {
            console.error(err);
        })
}


export function destroy(req, res, next) {
    let id = req.params.id;

    ReviewValidators.destroy({
        id
    })
        .then((sqlArgs) => {
            return ReviewProcedures.destroy(sqlArgs);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
        })
}





