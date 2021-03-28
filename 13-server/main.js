// axios
//   .get("https://swapi.dev/api/films/2/")
//   .then((res) => {
//     return res.data;
//   })
//   .then(data => console.log(data))

async function getInfo() {
    const filmsData = await axios.get("https://swapi.dev/api/films/2/");
    const charactersUrls = filmsData.data.characters
    const charactersShortInfo = {}

    const body = document.querySelector("body");
    const div = document.createElement('div')
    
    for (let i = 0; i < charactersUrls.length; i++) {
      const data = await axios.get(`${charactersUrls[i]}`);
      charactersShortInfo[i] = {
        name: data.data.name,
        birth_year: data.data.birth_year,
        gender: data.data.gender,
      };

      div.innerHTML = `${i} :
      Name: ${charactersShortInfo[i].name}
      Birth year: ${charactersShortInfo[i].birth_year}
      Gender: ${charactersShortInfo[i].gender}
      `
      body.append(div)
    }

    return charactersShortInfo
}

getInfo().then(data => console.log(data))