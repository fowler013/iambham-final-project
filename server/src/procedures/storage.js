import { crud } from './base';

const MODEL_NAME = 'UserStorage';

export let { all, create, destroy } = crud(MODEL_NAME);
