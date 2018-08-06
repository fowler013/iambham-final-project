import lodash from 'lodash';

export function all(args) {
    let userid = +args.userid;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';
        
        if (!lodash.isFinite(userid)) {
            err = true;
            message = 'Make sure userid is numeric values';
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([userid]);
    })
}
export function create(args) {
    let categoryid = +args.categoryid;
    let userid = +args.userid;
    let { item } = args;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';

        if (!lodash.isFinite(categoryid, userid)) {
            err = true;
            message = 'Make sure categoryid and userid are numeric values';
        }
        if (!lodash.toString(item)) {
            err = true;
            message = 'Make sure item is alphanumeric values';
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([categoryid, userid, item]);
    });
}

export function destroy(args) {
    let id = +args.id;

    return new Promise((resolve, reject) => {
        let err = false;
        let message = '';
        
        if (!lodash.isFinite(id)) {
            err = true;
            message = 'Make sure id is numeric values';
        }
        if (err) {
            reject(new Error(message));
            return;
        }
        resolve([id]);
    })
}