import { Router } from 'express';
import base from './base'
import emailValidator from 'email-validator'; 
import passwordValidator from 'password-validator';

let isPasswordValid = new passwordValidator();
isPasswordValid
.is().min(8)                                    // Minimum length 8
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits()                                 // Must have digits
.has().symbols()                                 // Must have digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123', 'password', '12345678',]); // Blacklist these values

let router = Router();

router
  .get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
base.read('spGetUser', [id]).then(results => res.send(results))
    } else {

    }
  })

  .post('/', (req, res, next) => {
    let{firstname, lastname, email} = req.body
    console.log(firstname, lastname, email)
    console.log((firstname || lastname || email) === undefined)
    if((firstname || lastname || email) === undefined) {
      res.status(400).send('Invalid info')
    }else if (!emailValidator.validate(email)){
      res.status(400).send('Invalid email')  
    }else if((firstname || lastname) ==="") {
      res.status(400).send('Invalid info')
    } else {

      res.send('got it')
      // base.create('spCreateUser', [email, firstname, lastname,])
      // .then(results => res.send(results))
    }
  })

  .put('/:id?', (req, res, next) => {
    let id = req.params.id;
    let { firstname, lastname, email, password, username } = req.body
    console.log(firstname, lastname, email)
    console.log((firstname || lastname || email || password || username) === undefined)
    if ((firstname || lastname || email) === undefined) {
      res.status(400).send('Invalid info')
    } else if (!validator.validate(email)) {
      res.status(400).send('Invalid email')
    } else if ((firstname || lastname || username) === "") {
      res.status(400).send('Invalid info');
    } else if (!isPasswordValid.validate(password)) {

    } else {
      res.send("got it");
      // base.update('spUpdateUser', [id, email, firstname, lastname,])
      // .then(results => res.send(results))
    }
  })

  .delete('/:id?', (req, res, next) => {
    let id = req.params.id;
    if (id) {
base.destroy('spDeleteUser', [id]).then(results => res.send(results))
    } else {

    }

  });


export default router;