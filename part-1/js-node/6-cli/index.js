const program = require("commander");
const { prompt } = require("inquirer");
const { newContactPrompts } = require("./prompts");
const { getStudents, saveStudent } = require("./utils");

program.version("0.0.1").description("CLI program");

program
  .command("new")
  .alias("n")
  .description("add a new student")
  .action(() => {
    prompt(newContactPrompts).then(student => {
      saveStudent(student);
    });
  });

program
  .command("list")
  .alias("l")
  .description("list all students")
  .action(() => {
    const students = getStudents();
    prompt([
      {
        type: "list",
        name: "selected",
        message: "Select a student",
        choices: Object.keys(students),
      },
    ]).then(({ selected }) => {
      const contact = students[selected];
      console.log(JSON.stringify(contact, null, 2));
    });
  });

program.parse(process.argv);
