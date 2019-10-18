const express = require('espress');
const router = express.Router();

router.get('/', (req, res) => res.send('User router')); 
