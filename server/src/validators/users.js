import lodash from 'lodash';
import emailValidator from 'email-validator';

export function all() {
    return Promise.resolve([]);
}
export function read(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([id]);
    });
}
export function create(args) {
    let { email, firstname, lastname, username, password } = args;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!emailValidator.validate(email)) {
            err = true;
            message = 'Email is not an email';
        }

        if (
            !(
                lodash.isString(firstname) &&
                lodash.isString(lastname) &&
                lodash.isString(username) &&
                lodash.isString(password)
            )
        ) {
            err = true;
            message =
                'Make sure firstname, lastname, username, and password are alphanumeric values';
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([email, firstname, lastname, password, username]);
    });
}
export function update(args) {
    let id = +args.id;
    let { email, firstname, lastname, username, password } = args;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        if (!emailValidator.validate(email)) {
            err = true;
            message = 'Email is not an email';
        }

        if (
            !(
                lodash.isString(firstname) &&
                lodash.isString(lastname) &&
                lodash.isString(username) &&
                lodash.isString(password)
            )
        ) {
            err = true;
            message =
                'Make sure firstname, lastname, username, and password are alphanumeric values';
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([id, email, firstname, lastname, password, username]);
    });
}
export function destroy() {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([]);
    });
}
