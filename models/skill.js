
 const skills = [
    {id: 125223, skill: 'Ride a bike', done: true},
    {id: 127904, skill: 'Swim', done: false},
    {id: 139608, skill: 'Soccer', done: false}
  ];
  
  module.exports = {
    getAll, 
    getOne,
    create, 
    deleteOne, 
    updateOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    // URL params are strings - convert to a number
  id = parseInt(id);
  // The Array.prototype.find iterator method is
  // ideal for finding objects within an array
  return skills.find(skill => skill.id === id);
  }

  function create(skill) {
    // this gets a random id 
    skill.id = Date.now() % 1000000
    // every new skill woudnt be done 
    skill.done = false 
    skills.push(skill)
  }

  function deleteOne(id) {
    id = parseInt(id)

    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
  }

  function updateOne(id, skill) {
    skillToUpdate = getOne(id)
    skillToUpdate.skill = skill
  }