import { crud, row, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';

const MODEL_NAME = `Favorite`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function getBasedOnRecipeId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}ByRecipeID`, args);
};

export function getBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}ByUserID`, args);
};

export function deleteBasedOnRecipeID(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}ByRecipeID`, args);
};

export function deleteBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}ByUserID`, args);
}