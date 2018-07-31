import { crud, row, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';

const MODEL_NAME = `UserReview`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

export function getBasedOnRecipeIDandUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnRecipeIDandUserId`, args);
};

export function getBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_GET}BasedOnUserId`, args);
};

export function deleteBasedOnRecipeIDandUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnRecipeIDandUserId`, args);
};

export function deleteBasedOnUserId(args) {
    return row(`${SQL_PREFIX}${SQL_DELETE}BasedOnUserId`, args);
};