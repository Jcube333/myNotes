import fs from "fs";
import chalk from "chalk";

function loadNotes() {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

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

export function listNotes() {
  const notes = loadNotes();

  console.log(chalk.bgYellow.bold("Your Notes"));
  notes.forEach((note) => {
    console.log(chalk.italic.bold.bgBlue(note.title));
  });
}

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

function saveNote(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
  console.log("Note added successfully");
}
