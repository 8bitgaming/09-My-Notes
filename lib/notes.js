var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) =>{
    // set id using uniqid package
    body.id = uniqid()
    newNote = body
    console.log("newNote", newNote)
    notesArray.push(newNote)
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return newNote;
    
}

module.exports = {
    createNewNote
  };
