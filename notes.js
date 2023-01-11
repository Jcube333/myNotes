import fs from "fs";
import chalk from "chalk";

//Load notes Utility
function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

//Add a note to a file with provided title and body options
export function addNotes(title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title == title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log(chalk.bold.bgGreen("Note Added Successfully"));
  } else {
    console.log(chalk.bold.bgRed("Title already in use"));
  }
}


//Remove a note from file whose title is provided

export function removeNote(title) {
  var notes = loadNotes();
  const prevLen = notes.length;
  notes = notes.filter((note) => note.title != title);

  if (prevLen == notes.length)

    console.log(chalk.bold.bgRed("Note with given title doesn't exist"));
  else {
    saveNote(notes);
    console.log(chalk.bold.bgGreen("Note Removed Successfully"));
  }
}

//Lists titles of all notes in the file
export function listNotes() {
  const notes = loadNotes();

  console.log(chalk.bgYellow.bold("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.italic.bold.bgBlue(note.title));
  });
}

//Reads a note with given title from available notes in file
export function readNote(title) {
  let notes = loadNotes();
  const noteRead = notes.find((note) => note.title == title);

  if (!noteRead)
    console.log(
      chalk.bgRed.italic("Note with title " + title + " doesn't exist")
    );
  else {
    console.log(chalk.bgYellow(noteRead.title));
    console.log(chalk.bold.bgBlack(noteRead.body));
  }
}

//Save Notes Utility

    console.log(chalk.bgRed("Note with given title doesn't exist"));
  else {
    saveNote(notes);
    console.log(chalk.bgGreen("Note Removed Successfully"));
  }
}


function saveNote(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
  console.log("Note added successfully");
}
