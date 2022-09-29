// Should be in uppercase 
const Skill = require('../models/skill')

module.exports = { 
    index,
    show, 
    new: newSkill,
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Skills'
    })
}

function show(req, res) {
    console.log('Hello', req.params)
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new')
}