const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const {check, validationResult} = require('express-validator/check');

// Model
const User = require('../../models/User')

// @route POST api/users
//  @dec  register user
// @access public
router.post(
    '/',
    [
    check('name', 'Name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'please enter a password with 6 or more characters'
    ).isLength({min: 6})
], 
 async(req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}

const {name, email, password} = req.body;

try{

// See if the user exist
let user = await User.findOne({email});

if(user){
    res.status(400).json({errors: [{msg: 'User already exist'}]});
}
// GET Users gravatar 
// Encrypt password usind bcrypt
// Return jsonwebtoken
res.send('User router');
}catch(err){
console.error(err.message);
res.status(500).send('Server error')
}

}); 


module.exports = router;
