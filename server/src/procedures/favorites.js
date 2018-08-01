import { crud, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';
import { row, rows, empty } from '../config/db';

const MODEL_NAME = `Favorite`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function readByRecipeId(args) {
    return rows(`${SQL_GET}${MODEL_NAME}ByRecipeID`, args);
}

export function readByUserId(args) {
        return rows(`${SQL_GET}${MODEL_NAME}ByUserID`, args);
}

export function deleteByRecipeId(args) {
    return empty(`${SQL_DELETE}${MODEL_NAME}ByRecipeID`, args);
};

export function deleteByUserId(args) {
    return empty(`${SQL_DELETE}${MODEL_NAME}ByUserID`, args);
}
