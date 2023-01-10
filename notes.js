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
  console.log(notes);
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

function saveNote(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
  console.log("Note added successfully");
}
