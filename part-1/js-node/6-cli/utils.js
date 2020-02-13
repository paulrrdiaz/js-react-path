const fs = require("fs");
const path = require("path");

const DBpath = path.join(__dirname, "students.json");
const DB = fs.readFileSync(DBpath, { encoding: "utf-8" });

const getStudents = () => JSON.parse(DB);
const saveStudent = student => {
  return fs.writeFileSync(
    DBpath,
    JSON.stringify(
      {
        ...getStudents(),
        [student.username]: student,
      },
      null,
      2,
    ),
  );
};

module.exports = {
  path: DBpath,
  getStudents,
  saveStudent,
};
