import lodash from 'lodash';

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
    let recipeid = +args.recipeid;
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(recipeid, userid)) {
            reject(new Error('Recipeid or userid is not a number'));
            return;
        }

        if (err) {
            reject(new Error(message));
            return;
        }

        resolve([recipeid, userid]);
    });
}