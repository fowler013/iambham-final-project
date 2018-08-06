import * as procedures from '../procedures/categories';

export function all(req, res, next) {
    procedures.all().then((categories) => {
        res.json(categories);
    });
}
