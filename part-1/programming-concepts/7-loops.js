var students = [
  {
    name: "Jon Snow",
    background: "Nothing",
  },
  {
    name: "Robb",
    background: "kind of king",
  },
  {
    name: "Sansa",
    background: "Queen",
  },
  {
    name: "Arya",
    background: "Killer",
  },
  {
    name: "Rickon",
    background: "useless",
  },
];

for (let s = 0; s < students.length; s++) {
  const student = students[s];
  console.log(student);
}

for (const s in students) {
  const student = students[s];
  console.log(student);
}
