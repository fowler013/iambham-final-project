import { rows, row, empty } from '../config/db';
import { pluralize } from '../middleware/utils.mw';

const SQL_PREFIX = `sp`;
const SQL_ALL = `GetAll`;
const SQL_GET = `Get`;
const SQL_CREATE = `Create`;
const SQL_UPDATE = `Update`;
const SQL_DELETE = `Delete`;

function all(MODEL_NAME) {
    return (args) => {
        return rows(`${SQL_PREFIX}${SQL_ALL}${pluralize(MODEL_NAME)}`, args);
    };
}

function read(MODEL_NAME) {
    return (args) => {
        return row(`${SQL_PREFIX}${SQL_GET}${MODEL_NAME}`, args);
    };
}

function create(MODEL_NAME) {
    return (args) => {
        return row(`${SQL_PREFIX}${SQL_CREATE}${MODEL_NAME}`, args);
    };
}

function update(MODEL_NAME) {
    return (args) => {
        return empty(`${SQL_PREFIX}${SQL_UPDATE}${MODEL_NAME}`, args);
    };
}

function destroy(MODEL_NAME) {
    return (args) => {
        return empty(`${SQL_PREFIX}${SQL_DELETE}${MODEL_NAME}`, args);
    };
}

export function crud(MODEL_NAME) {
    return { 
        all: all(MODEL_NAME),
        read: read(MODEL_NAME),
        create: create(MODEL_NAME),
        update: update(MODEL_NAME),
        destroy: destroy(MODEL_NAME)
     };
};