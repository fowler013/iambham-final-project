import lodash from 'lodash';

export function all() {
    return Promise.resolve([]);
}

export function read(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('Not a number'));
            return;
        }
        resolve([id]);
    });
}

export function create(args) {
    let userid = +args.userid;
    let ratings = +args.ratings;
    let { review, recipeid } = args;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.toString(review)) {
            err = true;
            message = 'Make sure review is alphanumeric values';
        }
        if (!lodash.toString(recipeid)) {
            err = true;
            message = 'Make sure recipeid is alphanumeric values';
        }

        if (!lodash.isFinite(ratings)) {
            err = true;
            message = 'Make sure rating is numeric value';
        }
        if (!lodash.isFinite(userid)) {
            err = true;
            message = 'Make sure userid is numeric value';
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([userid, recipeid, ratings, review]);
    });
}

export function update(args) {
    let id = +args.id;
    let ratings = +args.ratings;
    let { review } = args;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(id)) {
            reject(new Error('ID is not a number'));
            return;
        }
        if (!lodash.toString(review)) {
            err = true;
            message = 'Make sure review is alphanumeric values';
        }

        if (!lodash.isFinite(ratings)) {
            err = true;
            message = 'Make sure rating is numeric value';
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([id, ratings, review]);
    });
}

export function destroy(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        if (!lodash.isFinite(id)) {
            reject(new Error('ID is not a number'));
            return;
        }

        resolve([id]);
    });
}
