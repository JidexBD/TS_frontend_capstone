// html
const searchInput = document.querySelector("#input-search");

const searchButton = document.querySelector(".search-btn");

const planetImage = document.querySelector(".planet-img");
const planetName = document.querySelector(".planet-name");
const planetType = document.querySelector(".planet-type");
const planetDescription = document.querySelector(".planet-description");

const gravity = document.querySelector(".gravity");

const mass = document.querySelector(".mass-s");
const period = document.querySelector(".period");

const temp = document.querySelector(".temp-num");

const moon = document.querySelector(".half-num");

const diameter = document.querySelector(".diameter-num");

const company = document.querySelector(".comp-num");

// url
const url = "https://anurella.github.io/json/planet.json";

// array to store planet data

let planets = [];

// fetch data

async function getPlanets() {
  try {
    const response = await fetch(url);

    //check if request was successful
    if (!response.ok) {
      throw new Error("Unable to fetch data.");
    }

    //   convert response to JSON
    planets = await response.json();
    console.log(`planets data: ${planets}`);

    //   load earth when the application starts

    const earth = planets.find(
      ({ planet }) => planet.name.toLowerCase() === "earth",
    );

    if (earth) {
      displayPlanet(earth);
    }
  } catch (error) {
    console.error("Error fetching planets:", error);
    planetName.textContent = "Unable to load planets";
    planetDescription.textContent =
      "Please check your internet connection and refresh the page.";
  }
}

// display planet info

function displayPlanet(planet) {
  // update planet image

  planetImage.src = planet.image;
  planetImage.alt = `${planet.name} planet`;

  // info update
  planetName.textContent = planet.name;
  planetType.textContent = planet.type;
  planetDescription.textContent = planet.description;

  // update stat
  gravity.textContent = `${planet.gravity} m/s²`;
  mass.textContent = planet.mass;
  period.textContent = `${planet.period} days`;

  // Update additional figures
  temp.textContent = `${planet.temperature} K`;
  moon.textContent = planet.moons;
  diameter.textContent = `${planet.diameter.toLocaleString()} km`;

  // distance from the sun
  company.textContent = `${planet.distanceFromSun.toLocaleString()} million km`;
}

// search for a planet

function searchPlanet() {}
