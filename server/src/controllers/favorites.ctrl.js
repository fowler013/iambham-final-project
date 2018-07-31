import * as FavoriteProcedures from '../procedures/favorites';
import * as FavoriteValidators from '../validators/favorites';

export function all(req, res, next) {
    FavoriteProcedures.all()
        .then((favorites) => {
            res.json(favorites);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function read(req, res, next) {
    let id = req.params.id;

    FavoriteValidators.read({
        id,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.read(sqlArgs);
        })
        .then((favorite) => {
            res.json(favorite);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function create(req, res, next) {
    let { recipeid, userid } = req.body;

    FavoriteValidators.create({
        recipeid,
        userid
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.create(sqlArgs);
        })
        .then((idObj) => {
            res.json(idObj);
        })
        .catch((err) => {
            console.error(err);
        });
}