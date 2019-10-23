const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js')
const User = require('../../models/User')
const jwt = require('jsonwebtoken');
const {check, validationResult} = require('express-validator/check');
const config = require('config');
const bcrypt = require('bcryptjs');


// @route POST api/users
//  @dec  register user
// @access public
router.post(
    '/',
    [
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'password is required'
    ).exists()
],
 async(req, res) => {
const errors = validationResult(req);
if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
}

const {email, password} = req.body;

try{

// See if the user exist
let user = await User.findOne({email});

if(!user){
    return res
    .status(400)
    .json({errors: [{msg: 'ivalid credetials'}]});
}
// Return jsonwebtoken
// res.send('User registered');

const isMatch = await bcrypt.compare(password, user.password);

if(!isMatch){
  return res
  .status(400)
  .json({errors: [{msg: 'ivalid credetials'}]});
}


const payload ={
  user: {
    id: user.id
  }
};

jwt.sing(
  payload,
   config.get('jwtSecret'),
 {expiresIn: 36000}),
 (err, token) =>{
if(err) throw err;
res.json({token});
 }

}catch(err){
console.error(err.message);
res.status(500).send('Server error')
}

});


// @route GET api/auth
//  @dec Test route
// @access public
router.get('/', auth, async (req, res) => {
try {
const user = await User.findById(req.user.id).select('-password');
res.json(user);
}catch(err){
console.error(err.message);
res.status(500).send('Server Error');
}

});



module.exports = router;
