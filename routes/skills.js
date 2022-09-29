var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
// this route is localhost3000:/skills index show everything on the page 
router.get('/', skillsCtrl.index)

//this route is for localhost3000:/skills/new  return view form to add a new post
router.get('/new', skillsCtrl.new)

//this route is for localhost3000:/skills/:id show a spefic thing
router.get('/:id', skillsCtrl.show)

//localhost3000:/skills create a new post
router.post('/', skillsCtrl.create)

module.exports = router;
