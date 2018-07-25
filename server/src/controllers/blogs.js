import connection from '../config/db';
import { resolve } from 'dns';


const blogs = {
  readAll: function readAll() {
    return new Promise((resolve, reject) => {
      connection.query(`call spReadAllBlogs()`, (err, result) => {
        if(err) {
          reject(err);
        }
        resolve(result[0]);
      });
    })
},
read: function read(id) {
  return new Promise((resolve, reject) => {
    connection.query(`call spReadBlog(${id})`, (err, result) => {
      if(err) {
        reject(err);
      }
      resolve(result[0]);
    });
  })
},
create: function create(content, title) {
  return new Promise((resolve, reject) => {
    connection.query(`call spCreateBlog('${content}','${title}')`, (err, result) => {
      if(err) {
        reject(err);
      }
      resolve(result[0]);
    });
  })
},
update: function update(id, content, title) {
  return new Promise((resolve, reject) => {
    connection.query(`call spUpdateBlog(${id}, '${content}', '${title}')`, (err, result) => {
      if(err) {
        reject(err);
      }
      resolve(result[0]);
    });
  })
},
destroy: function destroy(id) {
  return new Promise((resolve, reject) => {
    connection.query(`call spDeleteBlog(${id})`, (err, result) => {
      if(err) {
        reject(err);
      }
      //console.log(result)
      resolve(result[0]);
    })
  })
}

/// END
};

export default blogs;