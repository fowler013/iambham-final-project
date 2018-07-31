import { crud, row, SQL_PREFIX, SQL_GET } from '../procedures/base';

const MODEL_NAME = `Favorite`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);