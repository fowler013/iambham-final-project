import { crud, SQL_PREFIX, SQL_GET, SQL_DELETE } from '../procedures/base';
import { row, rows, empty } from '../config/db';

const MODEL_NAME = `UserReview`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);


export function readByRecipeId(args) {
    return rows(`${SQL_GET}${MODEL_NAME}BasedOnRecipeID`, args);
};

export function readByUserId(args) {
    return rows(`${SQL_GET}${MODEL_NAME}BasedOnUserId`, args);
};

export function deleteByRecipeId(args) {
    return empty(`${SQL_DELETE}${MODEL_NAME}BasedOnRecipeID`, args);
};

export function deleteByUserId(args) {
    return empty(`${SQL_DELETE}${MODEL_NAME}BasedOnUserID`, args);
};


////// *** DON'T NEED TO WORRY ABOUT THESE BECAUSE THERE ARE NO ROUTES USING THEM
//export function getBasedOnRecipeIDandUserId(args) {
//    return rows(`${SQL_PREFIX}${SQL_GET}BasedOnRecipeIDandUserID`, args);
//};
//export function deleteBasedOnRecipeIDandUserId(args) {
//    return empty(`${SQL_PREFIX}${SQL_DELETE}BasedOnRecipeIDandUserID`, args);
//};
