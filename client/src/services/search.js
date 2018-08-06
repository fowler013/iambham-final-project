import * as baseService from './base';

function read(recipeid) {
    return baseService.get(`/api/search/${recipeid}`)
}

export { read };