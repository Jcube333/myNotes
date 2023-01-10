import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, removeNote } from "./notes.js";

const y = yargs(hideBin(process.argv));

// y.version("1.1.0");
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

y.command("list", "To list all the notes", () => {
  console.log("Listt");
});

y.command("read", "To read the notes", () => {
  console.log("Readd");
});

y.parse();
