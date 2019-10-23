const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth.js')
const User = require('../../models/User')

// @route GET api/auth
//  @dec Test route
// @access public
router.get('/', auth, async (req, res) => {
try {
const user = await User.findById(req.user.id)
}catch(err){

}

});



module.exports = router;
