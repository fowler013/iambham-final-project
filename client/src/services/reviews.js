import * as baseService from './base';

function all() {
    return baseService.get('/api/review');
}

function read(id) {
    return baseService.get(`/api/review/${id}`);
}

function create(data) {
    return baseService.post('/api/review', data);
}

function update(id, data) {
    return baseService.put(`/api/review/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/review/${id}`);
}
function readByRecipe(id) {
    return baseService.get(`/api/review/recipe/${id}`);
}
function readByUserid(id) {
    return baseService.get(`/api/review/user/${id}`)
}
function recipeIdentify(id) {
    return baseService.get(`/api/search/${id}`)
}

export { all, read, create, update, destroy, readByRecipe, recipeIdentify, readByUserid };