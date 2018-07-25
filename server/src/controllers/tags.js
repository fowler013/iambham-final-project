import connection from '../config/db';
import { resolve } from 'path';

const tags = {
    readAll: function readAll() {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadAllTags()`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    }

/// END    
};


export default tags;