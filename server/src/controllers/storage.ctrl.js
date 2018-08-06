import * as userStorageProcedures from '../procedures/storage';

export function all(req, res, next) {
    userStorageProcedures
        .all([req.params.userid])
        .then((items) => {
            res.json(items);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

export function create(req, res, next) {
    let { userid, item } = req.body;

    userStorageProcedures
        .create([userid, item])
        .then((id) => {
            res.status(201).json(id);
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}

export function destroy(req, res, next) {
    userStorageProcedures
        .destroy([req.params.id])
        .then(() => {
            res.end();
        })
        .catch((err) => {
            res.status(500).json(err);
        });
}
