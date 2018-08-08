import * as baseService from './base';

function all() {
    return baseService.get('/api/favorite');
}

function read(id) {
    return baseService.get(`/api/favorite/${id}`);
}

function create(data) {
    return baseService.post('/api/favorite', data);
}

function update(id, data) {
    return baseService.put(`/api/favorite/${id}`, data);
}

function destroy(id) {
    return baseService.destroy(`/api/favorite/${id}`);
}
function readByRecipe(id) {
    return baseService.get(`/api/favorite/recipe/${id}`);
}
function readByUserid(id) {
    return baseService.get(`/api/favorite/user/${id}`)
}
function destroyByRecipeIdAndUserId(data) {
    return baseService.destroy(`/api/favorite`, data);
}

export { all, read, create, update, destroy, readByRecipe, readByUserid, destroyByRecipeIdAndUserId };