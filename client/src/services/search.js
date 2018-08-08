import * as baseService from './base';

function read(recipeid) {
    return baseService.get(`/api/search/${recipeid}`);
}
function readSearch(recipeid) {
    return baseService.get(`/api/search/?${recipeid}`);
}

function readRecipeById(recipeid) {
    return baseService.get(`/api/search/recipe/${recipeid}`);
}

export { read, readSearch, readRecipeById };
