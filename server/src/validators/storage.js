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