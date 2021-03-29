async function getInfo() {
    const filmsData = await axios.get("https://swapi.dev/api/films/2/");
    const charactersUrls = filmsData.data.characters
    const charactersShortInfo = {}

    const field = document.querySelector('.field');
    const flex = document.createElement('div')
    flex.className = 'flex'
    flex.style.cssText =
      `display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: flex-start;
			align-content: flex-start;
			flex-wrap: wrap;
			padding: 15px`
    field.appendChild(flex);
    
    for (let i = 0; i < charactersUrls.length; i++) {
      const data = await axios.get(`${charactersUrls[i]}`);
      charactersShortInfo[i] = {
        name: data.data.name,
        birth_year: data.data.birth_year,
        gender: data.data.gender,
      };
      
      const caracterCard = document.createElement('div')
      caracterCard.className = 'caracterCard'
      caracterCard.style.cssText = `
        padding: 10px;
			  text-align: center;
        border: brown solid 3px;
        border-radius: 10px;
        min-height: 120px;
        flex: 0 1 120px;
      `
      flex.appendChild(caracterCard)
      
      const name = document.createElement('div')
      name.className = 'name'
      name.innerHTML = `Name: ${charactersShortInfo[i].name}`
      caracterCard.append(name)

      const birth_year = document.createElement('div')
      birth_year.className = 'birth_year'
      birth_year.innerHTML = `Birth year: ${charactersShortInfo[i].birth_year}`
      caracterCard.append(birth_year)

      const gender = document.createElement('div')
      gender.className = 'gender'
      gender.innerHTML = `Gender: ${charactersShortInfo[i].gender}`
      caracterCard.append(gender)
    }

    return charactersShortInfo
}

getInfo().then(data => console.log(data))