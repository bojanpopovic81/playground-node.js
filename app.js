const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const express = require('express');
const notes = require('./notes.js');

var app = express();

app.use(express.static(__dirname + '/dsfdd'));
app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.send({
    name: 'Andrew',
    likes: [
        'apple',
      'Cities'
    ]
  });
}); 


const titleOptions = {
      describe: 'dsfsdf',
      demand: true,
      alias: 't',
    };

const bodyOptions = {
      describe: 'aaaaa',
      demand: true,
      alias: 'b',      
    };    

const argv = yargs
  .command('czc', 'M3', {
    title: titleOptions,
    body:bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a fsdfs', {
    title: titleOptions 
  })
  .command('remove', 'Remove a sdffsdf', {
    title: titleOptions  
  })  
  .help()
  .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not sdfsdfsdss');
}

app.listen(3000, () => {
  console.log('Server is up on port 3000');
}); 
