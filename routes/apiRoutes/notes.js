const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notesArray } = require('../../db/db.json');


//Handle get call to return all notes
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.json(results);
  console.log("results", results)
});

//handle request to save a new note after validation
router.post('/notes', (req, res) => {

  if (!validateNote(req.body)) {
    res.status(400).send('Both a title and body text are required!');
  } else {
    const note = createNewNote(req.body, notesArray);
    res.json(note);
  }
});

//validate that the note has a title and body
const validateNote = (body) => {
    if (!body.title || !body.text ) {
        return false
    }
    return true
}

module.exports = router;