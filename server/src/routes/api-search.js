import { Router } from 'express';
import goEdamam from '../config/edamam'
import 'isomorphic-fetch'

let queryStringToJSON = (str) => {
    if (str.charAt(0) === "?") {
        str = str.slice(1);
    }

    let pairsArray = str.split("&");
    console.log(pairsArray);

    let obj = pairsArray.reduce((acc, curr) => {
        let [key, value] = curr.split("=");


        if (value.indexOf(",") > -1) {
            acc[key] = value.split(",");
            return acc;
        }

        acc[key] = [value];

        return acc;
    }, {});

    if (!obj.from) {
        obj.from = ['0']
        obj.to = ['20']
    }
    console.log(obj)
    return obj;
}

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
        });

});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    fetch(goEdamam(queryStringToJSON(id)), {
      method: "Get",
      headers: { "Content-Type": "application/json" }
    })
      .then(results => results.json())
      .then(results => {
        res.send(results);
      });
})

export default router;