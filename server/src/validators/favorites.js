import lodash from 'lodash';

//////////////////////// CRUD ////////////////////////////////////
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
    let userid = +args.userid;
    let recipeid = args.recipeid;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(userid)) {
            reject(new Error('Recipeid or userid is not a number'));
            return;
        }
        
        if (
            !(
                lodash.isString(recipeid)
            )
        ) {
            err = true;
            message =
                'Make sure recipeid is alphanumeric values';
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([recipeid, userid]);
    });
}
export function update(args) {
    let id = +args.id;
    let recipeid = args.recipeid;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(id)) {
            reject(new Error('Id or recipeid is not a number'));
            return;
        }
        
        if (
            !(
                lodash.isString(recipeid)
            )
        ) {
            err = true;
            message =
                'Make sure recipeid is alphanumeric values';
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([id, recipeid]);
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
////////////////////////////////////////////////////////////
export function readByRecipeId(args) {
    let err = false;
    let message = '';

    let recipeid = args.recipeid;

    return new Promise((resolve, reject) => {
        if (
            !(
                lodash.isString(recipeid)
            )
        ) {
            err = true;
            message =
                'Make sure recipeid is alphanumeric values';
        }
        
        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([recipeid]);
    });
}
export function readByUserId(args) {
    let err = false;
    let message = '';

    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(userid)) {
            reject(new Error('userid is not a number'));
            return;
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([userid]);
    });
}
////////////////////////////////////////////////////////////
