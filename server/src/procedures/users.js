import { crud, row, SQL_PREFIX, SQL_GET } from '../procedures/base';

const MODEL_NAME = `User`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);

//export function getBasedOnUserId(args) {
//    return row(`${SQL_PREFIX}${SQL_GET}BasedOnUserId`, args);
//};