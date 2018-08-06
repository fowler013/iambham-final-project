import * as userStorageProcedures from '../procedures/storage';
import * as userStorageValidators from '../validators/storage';

export function all(req, res, next) {
    let { userid } = req.params;

    userStorageValidators.all({
        userid,
    }).then((sqlArgs) => {
        return userStorageProcedures.all(sqlArgs);
    }).then((items) => {
        res.json(items);
    }).catch((err) => {
        console.error(err);
    });
    //userStorageProcedures
    //    .all([req.params.userid])
    //    .then((items) => {
    //        res.json(items);
    //    })
    //    .catch((err) => {
    //        res.status(500).json(err);
    //    });
}

export function create(req, res, next) {
    let { categoryid, userid, item } = req.body;

    userStorageValidators.create({
        categoryid,
        userid,
        item,
    }).then((sqlArgs) => {
        return userStorageProcedures.create(sqlArgs);
    }).then((items) => {
        res.json(items);
    }).catch((err) => {
        console.error(err);
    })
    //userStorageProcedures
    //    .create([categoryid, userid, item])
    //    .then((id) => {
    //        res.status(201).json(id);
    //    })
    //    .catch((err) => {
    //        res.status(500).json(err);
    //    });
}

export function destroy(req, res, next) {
    let id = req.params.id;

    userStorageValidators.destroy({
        id,
    }).then((sqlArgs) => {
        return userStorageProcedures.destroy(sqlArgs);
    }).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.error(err);
    })
    //userStorageProcedures
    //    .destroy([req.params.id])
    //    .then(() => {
    //        res.end();
    //    })
    //    .catch((err) => {
    //        res.status(500).json(err);
    //    });
}
