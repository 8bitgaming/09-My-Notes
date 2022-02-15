var uniqid = require('uniqid');
const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) =>{
    // set id based on what the next index of the array will be
    body.id = uniqid()
    newNote = body
    console.log("newNote", newNote)
    notesArray.push(newNote)
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
    
}

module.exports = {
    createNewNote
  };
