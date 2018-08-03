import * as baseService from './base';

function all() {
    return baseService.get('/api/user');
}

function read(id) {
    return baseService.get(`/api/user/${id}`);
}

function create(data) {
    return baseService.post('/api/user', data);
}

function update(id, data) {
    return baseService.put(`/api/user/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/user/${id}`);
}

export { all, read, create, update, destroy };