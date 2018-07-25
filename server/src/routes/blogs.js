import { Router } from 'express';
import blogs from '../controllers/blogs';

let router = Router();

router
  .get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
      blogs.read(id).then((blog) => {
        res.json(blog);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      blogs.readAll().then((blogs) => {
        res.json(blogs);
      }).catch((err) => {
        console.log(err);
      })
    }
  })
  .post('/', (req, res, next) => {
    let { content, title } = req.body;
    blogs.create(content, title).then((blog) => {
      res.json(blog);
    }).catch((err) => {
      console.log(err);
    })
  })
  .put('/:id?', (req, res, next) => {
    let id = req.params.id;
    let { content, title } = req.body;
    blogs.update(id, content, title).then((blog) => {
      res.json(blog);
    }).catch((err) => {
      console.log(err);
    })
  })
  .delete('/:id?', (req, res, next) => {
    let id = req.params.id;
    blogs.destroy(id).then((blog) => {
      res.json(blog);
    }).catch((err) => {
      console.log(err);
    })
  });


export default router;