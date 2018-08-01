import lodash from 'lodash';



export function all() {
    return Promise.resolve([]);
}

export function read(args) {
    let id = +args.id;


    return new Promise((resolve, reject) => {
        if (!(lodash.isFinite(id))) {
            reject(new Error('Not a number'));
            return;
        }
        resolve([id])
    });
}

export function create(args) {
    let ratings = +args.ratings 
    let { review } = args;

    return new Promise(((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.toString(review)) {
            err = true
            message = 'Make sure review is alphanumeric values'
        }

        if (!lodash.isFinite(ratings) && !(ratings <= 5)) {
            err = true
            message = 'Make sure rating is numeric value'
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([review, ratings])
    }))
}

export function update(args) {
    let id = +args.id
    let ratings = +args.ratings
    let { review } = args

    

    // if (!lodash.isFinite(id)) {
    //     reject(new Error('ID is not a number'));
    //     return;
    // }

    return new Promise(((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.toString(review)) {
            err = true
            message = 'Make sure review is alphanumeric values'
        }

        if (!lodash.isFinite(ratings)) {
            err = true
            message = 'Make sure rating is numeric value'
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([id, review, ratings])
    }))
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