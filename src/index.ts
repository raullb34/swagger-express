import {processFile} from './utils/files-handler';

processFile(`/**
* This function registers an user into the user system
* @route POST /users
* @group Authorization
* @param {string} username.body.required
* @param {string} password.body.required
* @param {boolean} isSostvanMember.body.required
* @param {enum} rol.body.required - The user rol - eg: READ, WRITE, ADMIN
* @returns {User.model} 201 - User created correctly
* @returns {object} 400 - Bad request
*/

router.post('/users', async (req, res) => {
   const body = req.body;
   if (body) {
       post_user(body).then((user) => {
           return res.status(201).json(user);
       })
           .catch((err) => {
               return res.status(400).json({
                   errorCode: 400,
                   message: err
               })
           })
   }
   else {
       return res.status(400).send();
   }
});

/**
* This function registers an user into the user system
* @route POST /users
* @group Authorization
* @param {string} username.body.required
* @param {string} password.body.required
* @param {boolean} isSostvanMember.body.required
* @param {enum} rol.body.required - The user rol - eg: READ, WRITE, ADMIN
* @returns {User.model} 201 - User created correctly
* @returns {object} 400 - Bad request
*/`)