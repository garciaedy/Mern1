const express = require('espress');
const router = express.Router();

// @route GET api/auth
//  @dec Test route
// @access public
router.get('/', (req, res) => res.send('auth router')); 


module.exports = rputer;
