const express = require('express');
const router = express.Router();

const {createNote,updateNote,getNote} = require("../controllers/notesController");

router.post('/create-note',createNote);
router.patch('/update-note/:id',updateNote);
router.get('/get-note',getNote);

module.exports = router ;