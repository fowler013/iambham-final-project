import * as baseService from './base';

function all(userid) {
    return baseService.get(`/api/storage/${userid}`);
}

function create(data) {
    return baseService.post('/api/storage/', data);
}

function destroy(id) {
    return baseService.destroy(`/api/storage/${id}`);
}

export { all, create, destroy };
