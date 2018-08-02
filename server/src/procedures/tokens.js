import { crud, SQL_PREFIX, SQL_GET, SQL_FIND } from '../procedures/base';
import { row, rows, empty } from '../config/db';

const MODEL_NAME = `Token`;

export let { all, create, read, update, destroy } = crud(MODEL_NAME);