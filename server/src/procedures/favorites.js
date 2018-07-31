import { crud, row, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';

const MODEL_NAME = `Favorite`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function getBasedOnRecipeId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnRecipeID`, args);
};

export function getBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnUserID`, args);
};

export function deleteBasedOnRecipeID(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnRecipeID`, args);
};

export function deleteBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnUserID`, args);
}