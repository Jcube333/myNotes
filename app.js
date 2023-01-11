import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, listNotes, removeNote, readNote } from "./notes.js";

const y = yargs(hideBin(process.argv));

y.version("1.1.0");

//Add a file using this command
y.command(
  "add",
  "To Add a new note",
  {
    //builder to add options
    title: {
      desc: "Add title of your note",
      demandOption: true,
      type: "string",
    },
    body: {
      desc: "Add body of your note",
      demandOption: true,
      type: "string",
    },
  },
  //handler
  (argv) => {
    addNotes(argv.title, argv.body);
  }
);

//Remove a file using this command
y.command(
  "remove",
  "To remove an existing note",
  {
    title: {
      desc: "Title of Note to be removed",
      demandOption: true,
      type: "string",
    },
  },
  (argv) => {
    removeNote(argv.title);
  }
);

//List all files using this command
y.command(
  "list",
  "To list all the notes",
  {
    //No options needed
  },
  () => {
    listNotes();
  }
);

//Read a file using this command
y.command(
  "read",
  "To read the notes",
  {
    title: {
      desc: "Title of note to be read",
      demandOption: true,
      type: "string",
    },
  },
  (argv) => {
    readNote(argv.title);
  }
);

y.parse();
