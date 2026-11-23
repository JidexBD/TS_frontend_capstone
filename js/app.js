const planetImgs = document.querySelector(".planet-img");
const searchInput = document.querySelector("#input-search");
const searchBtn = document.querySelector(".search-btn");
const namePlanet = document.querySelector(".planet-name");
const description = document.querySelector(".planet-description");
const plaentType = document.querySelector(".planet-type");
const gravity = document.querySelector(".gravity");
const mass = document.querySelector(".mass-s");
const period = document.querySelector(".period-p");
const temp = document.querySelector(".temp-num");
const moons = document.querySelector(".half-num");
const diameter = document.querySelector(".diameter-num");
const company = document.querySelector(".comp-num");
async function fetchData() {
  console.log(searchInput);

  // the .value error
  if (!searchInput || typeof searchInput.value !== "string") {
    console.error("Check that #input-search selects an input element.");
    return;
  }

  // geting the planet name when the code runs
  const planetName = searchInput.value.trim().toLowerCase();
  // check if input is empty

  if (!planetName) {
    throw new Error("please enter planet name");
  }

  try {
    const response = await fetch("https://anurella.github.io/json/planet.json");

    if (!response.ok) {
      throw new Error("Could not fetch planet data");
    }

    const data = await response.json();

    // Find the planet entered by the user
    const planet = data.find((item) => item.name.toLowerCase() === planetName);

    // Check whether the planet exists
    if (!planet) {
      console.log("Planet not found");
      planetImgs.removeAttribute("src");
      return;
    }

    // Display the planet image
    planetImgs.src = planet.image;
    planetImgs.alt = planet.name;
    //planet names
    namePlanet.textContent = planet.name;
    //   planet type
    plaentType.textContent = planet.type;
    //planet description
    description.textContent = planet.description;

    //stats
    gravity.textContent = planet.gravity;
    mass.textContent = planet.mass;
    period.textContent = planet.period;
    //figures
    temp.textContent = planet.temperature;
    moons.textContent = planet.moons;
    diameter.textContent = planet.diameter;
    company.textContent = planet.distanceFromSun;
  } catch (e) {
    console.error(e);
  } finally {
    searchInput.value = "";
  }
}

searchBtn.addEventListener("click", fetchData);

// Enter key

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    fetchData();
  }
});

// dark theme

const themeButton = document.querySelector(".theme-button");
const themeText = document.querySelector(".theme-text");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  const isDark = document.body.classList.contains("dark-theme");

  themeText.textContent = isDark ? "LIGHT" : "DARK";
  themeButton.setAttribute("aria-pressed", isDark);

  // need to update theme images
});
