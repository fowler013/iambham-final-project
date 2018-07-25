import connection from '../config/db';

const users = {
  readAll: function readAll() {
    return new Promise((resolve, reject) => {
      connection.query(`call spReadAllUsers()`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result[0]);
      });
    })
  },
  read: function read(id) {
    return new Promise((resolve, reject) => {
      connection.query(`call spReadUser(${id})`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result[0]);
      });
    })
  },
  create: function create(email, password) {
    return new Promise((resolve, reject) => {
      connection.query(`call spCreateUser('${email}','${password}')`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result[0]);
      });
    })
  },
  update: function update(id, email, password) {
    return new Promise((resolve, reject) => {
      connection.query(`call spUpdateUser(${id}, '${email}', '${password}')`, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result[0]);
      });
    })
  },
  destroy: function destroy(id) {
    return new Promise((resolve, reject) => {
      connection.query(`call spDeleteUser(${id})`, (err, result) => {
        if (err) {
          console.log(err);
        }
        resolve(result[0]);
      })
    })
  },
  find: function find(email) {
    return new Promise((resolve, reject) => {
      connection.query(`call spFindUserEmail('${email}')`, (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result[0]);
      })
    })
  }

  /// END
};

export default users;