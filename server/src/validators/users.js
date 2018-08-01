import lodash from 'lodash';
import emailValidator from 'email-validator';
import passwordValidator from 'password-validator';

let isPasswordValid = new passwordValidator();
isPasswordValid
    .is().min(8)                                    // Minimum length 8
    .is().max(20)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits()                                 // Must have digits
    .has().symbols()                                 // Must have symbols
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Passw0rd', 'Password123', 'password', '12345678',]); // Blacklist these values

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
        
        if (!isPasswordValid.validate(password)) {
          err = true;
          message = "Password is not valid";
        }

        if (
            !(
                lodash.isString(firstname) &&
                lodash.isString(lastname) &&
                lodash.isString(username)
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
            reject(new Error('ID is not a number'));
            return;
        }

        if (
            !(
                lodash.isString(email) &&
                lodash.isString(firstname) &&
                lodash.isString(lastname) &&
                lodash.isString(username)
            )
        ) {
            err = true;
            message =
                'Make sure firstname, lastname, username, and email are alphanumeric values';
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([id, email, firstname, lastname, username]);
    });
}
export function destroy(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Id is not a number'));
            return;
        }

        resolve([id]);
    });
}
