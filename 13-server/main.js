const getInfoButton = document.querySelector('.getInfo')
getInfoButton.addEventListener('click', getInfo)

const getPlanetsButton = document.querySelector('.getPlanets')
getPlanetsButton.addEventListener('click', getPlanets)

async function getInfo() {
  const filmsData = await axios.get("http://swapi.dev/api/films/2/");
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

async function getPlanets() {
  const planetsData = await axios.get("https://swapi.dev/api/planets/");
  const planetsObjects = planetsData.data.results
  const planets = planetsObjects.map(planet => planet.name)

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
    max-width: 300px;`
  field.appendChild(flex);

    // divide planetsArray into arrays of 5 planets
    let amountOnPage = 5;
    let planetsSubArray = [];
    for (let i = 0; i <Math.ceil(planets.length/amountOnPage); i++){
      planetsSubArray[i] = planets.slice((i*amountOnPage), (i*amountOnPage) + amountOnPage);
  }

  function add5Planets(planetsArray) {

  }

  for (let i = 0; i < planets.length; i++) {
    const planetCard = document.createElement("div");
    planetCard.className = "planetCard";
    planetCard.style.cssText = `
    background-color: #cdeac0;
    border: black solid 3px;
    border-radius: 10px;
    width: 500px;
    height: 60px;
    margin: 15px; 
    display:flex;
    justify-content:left;
    padding-left: 10px;
    align-items:center;      
    `;
    flex.appendChild(planetCard);

    const name = document.createElement("p");
    name.className = "name";
    name.style.cssText =
      "font-weight: 600; font-size: 22px; display: block; padding: 10px";
    name.innerHTML = `${planets[i]}`;
    planetCard.append(name);

    const planetImg = document.createElement('img')
    planetImg.className = 'planetImg'
    planetImg.src = 'assets/globe.svg'
    planetImg.style.cssText = 'display: block; padding: 10px 20px; width: 20px; height: 30px; margin-left: auto;'
    planetCard.append(planetImg)
    }

    const nextButton = document.createElement("button");
    nextButton.className = `styleButton`
    nextButton.textContent = "Next";
    flex.appendChild(nextButton);

    nextButton.addEventListener('click', () => {
      console.log("Next")
    })

  return planetsSubArray
}
