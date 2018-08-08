import { Router } from 'express';
import goEdamam from '../config/edamam'
import 'isomorphic-fetch'



let router = Router();

router.get('/recipe/:id', (req, res) => {
let id = req.params.id;
    fetch(goEdamam({ uri: `http://www.edamam.com/ontologies/edamam.owl#recipe_${id}` }), {
        method: "Get",
        headers: { "Content-Type": "application/json" }
    })
        .then(results => results.json())
        .then(results => {
            res.send(results);
        }).catch((err) => {
            console.error(err)
        })

});

router.get('/', (req, res) => {
    let id = req.query;
    console.log(id)
    fetch(goEdamam(id), {
      method: "Get",
      headers: { "Content-Type": "application/json" }
    })
      .then(results => results.json())
      .then(results => {
        res.send(results);
      }).catch((err) => {
        console.error(err)
    })
})

export default router;