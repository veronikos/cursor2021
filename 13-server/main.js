axios
  .get("https://swapi.dev/api/people/")
  .then((result) => {
    const people = result.data.results;
    const requiredInfo = people.map((p) => ({
      name: p.name,
      birth_Year: p.birth_year,
      gender: p.gender,
    }));
    return requiredInfo;
  })
  .then((data) => {
    console.log(data);
  });

axios
  .get("https://swapi.dev/api/films/2/")
  .then((res) => {
    return res.data.characters;
  })
  .then(
    axios
      .get("http://swapi.dev/api/people/1/")
      .then((res) => res.data)
      .then((res) => {
        const character = {
            Name: res.name,
            Birth_year: res.birth_year,
            Gender: res.gender
        }
        return character;
    })
    .then(data => console.log(data))
  )
