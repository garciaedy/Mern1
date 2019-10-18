const express = require('espress');
const router = express.Router();

// @route GET api/post
//  @dec Test route
// @access public
router.get('/', (req, res) => res.send('Post router')); 


module.exports = rputer;
