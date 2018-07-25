import connection from '../config/db';
import { resolve } from 'path';

const tokens = {

    readAll: function readAll() {
        return new Promise((resolve, reject) => {
            connection.query(`call spReadAllTokens()`, (err, result) => {
                if(err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    read: function read(id) {
        return new Promise((resolve, reject) => {
            console.log(`call spReadToken(${id})`);
            connection.query(`call spReadToken(${id})`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    },
    create: function create(userid) {
        return new Promise((resolve, reject) => {
            connection.query(`call spCreateToken(${userid})`, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result[0]);
            });
        })
    }

    /// END
};

export default tokens;