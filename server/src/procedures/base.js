import { rows, row, empty } from '../config/db';
import { pluralize } from '../middleware/utils.mw';

export const SQL_PREFIX = `sp`;
export const SQL_ALL = `${SQL_PREFIX}GetAll`;
export const SQL_GET = `${SQL_PREFIX}Get`;
export const SQL_CREATE = `${SQL_PREFIX}Create`;
export const SQL_UPDATE = `${SQL_PREFIX}Update`;
export const SQL_DELETE = `${SQL_PREFIX}Delete`;

function all(MODEL_NAME) {
    return (args) => {
        return rows(`${SQL_ALL}${pluralize(MODEL_NAME)}`, args);
    };
}

function read(MODEL_NAME) {
    return (args) => {
        return row(`${SQL_GET}${MODEL_NAME}`, args);
    };
}

function create(MODEL_NAME) {
    return (args) => {
        return row(`${SQL_CREATE}${MODEL_NAME}`, args);
    };
}

function update(MODEL_NAME) {
    return (args) => {
        return empty(`${SQL_UPDATE}${MODEL_NAME}`, args);
    };
}

function destroy(MODEL_NAME) {
    return (args) => {
        return empty(`${SQL_DELETE}${MODEL_NAME}`, args);
    };
}

export function crud(MODEL_NAME) {
    return {
        all: all(MODEL_NAME),
        read: read(MODEL_NAME),
        create: create(MODEL_NAME),
        update: update(MODEL_NAME),
        destroy: destroy(MODEL_NAME),
    };
}
