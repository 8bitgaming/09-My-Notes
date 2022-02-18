const router = require('express').Router();
const { getNotes, createNewNote, deleteNote } = require('../../lib/notes');


//Handle get call to return all notes
router.get('/notes', (req, res) => {
  req ? res.json(getNotes()) : res.status(400).send('There was a problem returning your notes.');
});

//handle request to save a new note after validation
router.post('/notes', (req, res) => {

  if (!validateNote(req.body)) {
    res.status(400).send('Both a title and body text are required!');
  } else {
    const note = createNewNote(req.body);
    res.json(note);
  }
});

//handle request to delete a note using its ID
router.delete('/notes/:id', (req, res) => {
deleteNote(req.params.id);
res.json();
});

//validate that the note has a title and body
const validateNote = (body) => {
    if (!body.title || !body.text ) {
        return false
    }
    return true
}

module.exports = router;