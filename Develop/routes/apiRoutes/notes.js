const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');



router.get('/notes', (req, res) => {
    let results = notes;
    // if (req.query) {
    //     results = filterByQuery(req.query, results);
    // }
  res.json(results);
  console.log("results", results)
});

router.post('/notes', (req, res) => {

  if (!validateNote(req.body)) {
    res.status(400).send('Both a title and body text are required!');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

const validateNote = (body) => {
    if (!body.title || !body.text ) {
        return false
    }
    return true
}

module.exports = router;