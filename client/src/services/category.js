import * as baseService from './base';

export function all() {
    return baseService.get('/api/categories');
}
