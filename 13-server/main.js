// here i try to make planets work properly

const getInfoButton = document.querySelector(".getInfo");
const filmId = document.getElementById('film-id')
getInfoButton.addEventListener('click', () => {
  getInfo(filmId.value)
})

const getPlanetsButton = document.querySelector(".getPlanets");
getPlanetsButton.addEventListener("click", getPlanets);


async function getInfo(n) {
  const link = 'https://swapi.dev/api/films/' + n
  console.log(link)
  const filmsData = await axios.get(link);
  const charactersUrls = filmsData.data.characters;
  const charactersShortInfo = {};

  const field = document.querySelector(".field");
  field.innerHTML = "";
  const flex = document.createElement("div");
  flex.className = "flex";
  field.appendChild(flex);

  for (let i = 0; i < charactersUrls.length; i++) {
    const data = await axios.get(`https${charactersUrls[i].substring(4)}`);
    // console.log(`https${charactersUrls[i].substring(4)}`)
    charactersShortInfo[i] = {
      name: data.data.name,
      birth_year: data.data.birth_year,
      gender: data.data.gender,
    };

    const caracterCard = document.createElement("div");
    caracterCard.className = "caracterCard";
    flex.appendChild(caracterCard);

    const name = document.createElement("p");
    name.className = "name";
    name.innerHTML = `${charactersShortInfo[i].name}`;
    caracterCard.append(name);

    const birth_year = document.createElement("p");
    birth_year.className = "birth_year";
    birth_year.innerHTML = `Birth year: ${charactersShortInfo[i].birth_year}`;
    caracterCard.append(birth_year);

    const gender = document.createElement("img");
    gender.className = "gender";

    if (charactersShortInfo[i].gender === "male") {
      gender.src = "assets/mars.svg";
      caracterCard.style.backgroundColor = "#bde0fe";
    } else if (charactersShortInfo[i].gender === "female") {
      gender.src = "assets/venus.svg";
      caracterCard.style.backgroundColor = "#ffafcc";
    } else {
      gender.src = "assets/genderless.svg";
    }

    caracterCard.append(gender);
  }
  return charactersShortInfo;
}

function createButton(name) {
  const button = document.createElement("button");
  button.className = `styleButton ${name}`;
  button.textContent = name;
  planetsFlexContainer.appendChild(button);
}

const planetsFlexContainer = document.createElement("div");

function showPlanets(planets) {
  planetsFlexContainer.innerHTML = ""
  for (let i = 0; i < planets.length; i++) {
    const planetCard = document.createElement("div");
    planetCard.className = "planetCard";
    planetsFlexContainer.appendChild(planetCard);

    const name = document.createElement("p");
    name.className = "name";
    name.innerHTML = `${planets[i]}`;
    planetCard.append(name);

    const planetIcon = document.createElement("img");
    planetIcon.className = "planetImg";
    planetIcon.src = "assets/globe.svg";
    planetCard.append(planetIcon);
  }
    createButton('Next')
    const nextButton = document.querySelector(".Next");
    nextButton.addEventListener("click", getNextPlanets);

    createButton('Prev')
    const prevButton = document.querySelector(".Prev");
    prevButton.addEventListener("click", getPrevPlanets);
}


async function getPlanets() {
  planetsData = await axios.get("https://swapi.dev/api/planets/");
  drawPlanets(planetsData)
}

async function getNextPlanets() {
  if (planetsData.data.next !== null) {
      planetsData = await axios.get(planetsData.data.next);
  console.log(planetsData)
  drawPlanets(planetsData)
  }
}

async function getPrevPlanets() {
  if (planetsData.data.previous !== null) {
      planetsData = await axios.get(planetsData.data.previous);
  console.log(planetsData)
  drawPlanets(planetsData)
  }
}

function drawPlanets(axiosResponse) {
  const planets = axiosResponse.data.results.map((planet) => planet.name);

  const field = document.querySelector(".field");
  field.innerHTML = "";
  
  planetsFlexContainer.className = "flexPlanets";
  field.appendChild(planetsFlexContainer);

  showPlanets(planets)
}

let planetsData = null; 