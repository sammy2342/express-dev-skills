var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// this route is localhost3000:/skills index show everything on the page 
router.get('/', skillsCtrl.index)

//this route is for localhost3000:/skills/:id show a spefic thing
router.get('/:id', skillsCtrl.show)

module.exports = router;
