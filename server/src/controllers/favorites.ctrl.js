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
        userid,
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
export function update(req, res, next) {
    let id = req.params.id;
    let { recipeid } = req.body;

    FavoriteValidators.update({
        id,
        recipeid,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.update(sqlArgs);
        })
        .then((favorite) => {
            res.json(favorite);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function destroy(req, res, next) {
    let id = req.params.id;

    FavoriteValidators.destroy({
        id,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.destroy(sqlArgs);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
        });
}
/// read by recipeid
export function readByRecipeId(req, res, next) {
    let recipeid = req.params.id;

    FavoriteValidators.readByRecipeId({
        recipeid,
    })
        .then((sqlArgs) => {
            console.log('sql args', sqlArgs);
            return FavoriteProcedures.readByRecipeId(sqlArgs);
        })
        .then((favorite) => {
            console.log('favroite', favorite);
            res.json(favorite);
        })
        .catch((err) => {
            console.error(err);
        });
}
/// read by userid
export function readByUserId(req, res, next) {
    let userid = req.params.id;

    FavoriteValidators.readByUserId({
        userid,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.readByUserId(sqlArgs);
        })
        .then((favorite) => {
            res.json(favorite);
        })
        .catch((err) => {
            console.error(err);
        });
}
/// delete by recipeid
export function deleteByRecipeId(req, res, next) {
    let recipeid = req.params.id;

    FavoriteValidators.readByRecipeId({
        recipeid,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.deleteByRecipeId(sqlArgs);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
        });
}
/// delete by userid
export function deleteByUserId(req, res, next) {
    let userid = req.params.id;

    FavoriteValidators.readByUserId({
        userid,
    })
        .then((sqlArgs) => {
            return FavoriteProcedures.deleteByUserId(sqlArgs);
        })
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            console.error(err);
        });
}
