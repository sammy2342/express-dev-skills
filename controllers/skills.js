// Should be in uppercase 
const Skill = require('../models/skill')

module.exports = { 
    index,
    show, 
    new: newSkill,
    create,
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

function create(req, res) {
    // req.body is the value we pass inside the new skill we created 
    // console.log('This is a console.log', req.body)
    Skill.create(req.body)

    res.redirect('/skills')
}