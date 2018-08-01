import { crud, row, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';

const MODEL_NAME = `UserReview`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function getBasedOnRecipeIDandUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnRecipeIDandUserID`, args);
};

export function getBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnUserId`, args);
};

export function deleteBasedOnRecipeIDandUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnRecipeIDandUserID`, args);
};

export function deleteBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnUserID`, args);
};

export function deleteByRecipeID(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnRecipeID`, args);
};

export function getByRecipeId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnRecipeID`, args);
};
