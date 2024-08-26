let arr = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.net",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.org",
      website: "hildegard.org",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      website: "hildegard.org",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      website: "hildegard.org",
    },
  ];
  
  let net = arr.filter(user => user.email.endsWith('.net'));
  let org = arr.filter(user => user.email.endsWith('.org'));
  
  console.log(net);
  console.log(org);


  //2
  let people = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'San Francisco' },
    { name: 'Mike', age: 35, city: 'Chicago' },
    { name: 'Sara', age: 28, city: 'Los Angeles' }
  ];
  

  let totalAge = people.reduce((sum, person) => sum + person.age, 0);
  let averageAge = totalAge / people.length;
  

  let oldestPerson = people.reduce((oldest, person) => person.age > oldest.age ? person : oldest, people[0]);
  

  let youngestPerson = people.reduce((youngest, person) => person.age < youngest.age ? person : youngest, people[0]);
  
  console.log( averageAge);
  console.log( oldestPerson);
  console.log( youngestPerson);
  