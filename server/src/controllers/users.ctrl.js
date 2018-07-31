import * as UserProcedures from '../procedures/users';
import * as userValidators from '../validators/users';

export function all(req, res, next) {
    UserProcedures.all()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        });
}
export function read(req, res, next) {}
export function create(req, res, next) {
    let { email, firstname, lastname, password, username } = req.body;

    userValidators
        .create({
            email,
            firstname,
            lastname,
            password,
            username,
        })
        .then((sqlArgs) => {
            return UserProcedures.create(sqlArgs);
        })
        .then((idObj) => {
            res.json(idObj);
        })
        .catch((err) => {
            console.error(err);
        });
}
export function update(req, res, next) {}
export function destroy(req, res, next) {}
