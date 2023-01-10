import fs from "fs";

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

  const duplicateNote = notes.filter((note) => {
    return note.title == title;
  });

  if (duplicateNote.length == 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
  } else {
    console.log("Title already in use");
  }
}

export function removeNote(title) {
  var notes = loadNotes();
  const prevLen = notes.length;
  notes = notes.filter((note) => {
    return note.title != title;
  });

  if (prevLen == notes.length)
    console.log("Note with given title doesn't exist");
  else {
    saveNote(notes);
    console.log("Note Removed Successfully");
  }
}

function saveNote(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
  console.log("Note added successfully");
}
