import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const y = yargs(hideBin(process.argv));

// y.version("1.1.0");
y.command("add", "To Add a new note", () => {
  console.log("Add");
});

y.command("remove", "To remove an existing note", () => {
  console.log("Rmv");
});

y.command("list", "To list all the notes", () => {
  console.log("Listt");
});

y.command("read", "To read the notes", () => {
  console.log("Readd");
});

y.parse();

console.log(y.argv);
