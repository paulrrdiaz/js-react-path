const students = [
  {
    name: "Yoel Picasso Chavez",
    background: "FullStack",
    email: "ypicasso@gmail.com",
  },
  {
    name: "Juan Kuga",
    background: "FullStack",
    email: "juankp3@gmail.com",
  },
  {
    name: "Luis Fernando",
    background: "Estudiante",
    email: "chaoslecion71@gmail.com",
  },
  {
    name: "Ladislao Chapa",
    background: "Freelance",
    email: "ladislaox@gmail.com",
  },
  {
    name: "Diego Rendería",
    background: "FullStack",
    email: "dgo250594@gmail.com",
  },
  {
    name: "Harold Carhuancho",
    background: "FullStack",
    email: "haroldavis91@gmail.com",
  },
  {
    name: "Diego Mitma",
    background: "",
    email: "diego89ma@gmail.com",
  },
  {
    name: "Fernando Valverde |",
    background: "Backend",
    email: "fvalverdeu@gmail.com",
  },
  {
    name: "Joel Miranda",
    background: "Freelance",
    email: "joelmiranda1300@gmail.com",
  },
  {
    name: "Ronald Requena",
    background: "Backend",
    email: "rcronald@gmail.com",
  },
  {
    name: "Juan Mendoza",
    background: "Networking",
    email: "jmendozaore@gmail.com",
  }
];
for (let s = 0; s < students.length; s++) {
  const student = students[s];
  console.log(student);
}

for (const s in students) {
  const student = students[s];
  console.log(student);
}
