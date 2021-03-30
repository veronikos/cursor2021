const getInfoButton = document.querySelector('.getInfo')
getInfoButton.addEventListener('click', getInfo)

async function getInfo() {
    const filmsData = await axios.get("https://swapi.dev/api/films/2/");
    const charactersUrls = filmsData.data.characters
    const charactersShortInfo = {}

    const field = document.querySelector('.field');
    field.innerHTML = "";
    const flex = document.createElement('div')
    flex.className = 'flex'
    flex.style.cssText =
      `display: flex;
			flex-direction: row;
      justify-content: center;
			flex-wrap: wrap;
			padding: 15px;
			max-width: 1300px;`
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
        border: black solid 3px;
        border-radius: 10px;
        width: 200px;
        height: 120px;
        margin: 15px;        
      `
      flex.appendChild(caracterCard)
      
      const name = document.createElement('p')
      name.className = 'name'
      name.style.cssText = 'font-weight: 600; font-size: 22px; display: block; padding: 10px'
      name.innerHTML = `${charactersShortInfo[i].name}`
      caracterCard.append(name)

      const birth_year = document.createElement('p')
      birth_year.className = 'birth_year'
      birth_year.innerHTML = `Birth year: ${charactersShortInfo[i].birth_year}`
      caracterCard.append(birth_year)

      const gender = document.createElement('img')
      gender.className = 'gender'
      gender.style.cssText = 'display: block; padding: 10px; width: 20px; height: 30px; margin-left: auto; margin-right: auto;'

      if (charactersShortInfo[i].gender === 'male') {
        gender.src = 'assets/mars.svg'
        caracterCard.style.backgroundColor = "#bde0fe";
      } else if (charactersShortInfo[i].gender === 'female') {
        gender.src = 'assets/venus.svg'
        caracterCard.style.backgroundColor = "#ffafcc";
      } else {
        gender.src = 'assets/genderless.svg'
      }

      caracterCard.append(gender)
    }
    return charactersShortInfo
}

// getInfo().then(data => console.log(data))