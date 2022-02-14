var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');
let notesArray = [] 

const createNewNote = (req, res) =>{
    // set id based on what the next index of the array will be
    const note = body
    req.body.id = uniqid()
    notesArray.push(note)
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
    
}

module.exports = {
    createNewNote
  };
