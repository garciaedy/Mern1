const express = require('espress');
const router = express.Router();

// @route GET api/profile
//  @dec Test route
// @access public
router.get('/', (req, res) => res.send('Profile router')); 


module.exports = rputer;
