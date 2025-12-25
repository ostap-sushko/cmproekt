const scientists = [
{
name: "Albert",
surname: "Einstein",
born: 1879,
dead: 1955,
id: 1
},
{
name: "Isaac",
surname: "Newton",
born: 1643,
dead: 1727,
id: 2
},
{
name: "Galileo",
surname: "Galilei",
born: 1564,
dead: 1642,
id: 3
},
{
name: "Marie",
surname: "Curie",
born: 1867,
dead: 1934,
id: 4
},
{
name: "Johannes",
surname: "Kepler",
born: 1571,
dead: 1630,
id: 5
},
{
name: "Nicolaus",
surname: "Copernicus",
born: 1473,
dead: 1543,
id: 6
},
{
name: "Max",
surname: "Planck",
born: 1858,
dead: 1947,
id: 7
},
{
name: "Katherine",
surname: "Blodgett",
born: 1898,
dead: 1979,
id: 8
},
{
name: "Ada",
surname: "Lovelace",
born: 1815,
dead: 1852,
id: 9
},
{
name: "Sarah E.",
surname: "Goode",
born: 1855,
dead: 1905,
id: 10
},
{
name: "Lise",
surname: "Meitner",
born: 1878,
dead: 1968,
id: 11
},
{
name: "Hanna",
surname: "Hammarström",
born: 1829,
dead: 1909,
id: 12
}
];

const listRef = document.querySelector(".choose__list");
const buttonRef = document.querySelectorAll(".choose__button");

function renderList(data, onlyBorn = false) {
  listRef.innerHTML = "";

  const markup = data.map(({ name, surname, born, dead }) => `
    <li class="choose__item">
      <h3 class="choose__name">${name} ${surname}</h3>
      <p class="choose__years">
        ${onlyBorn ? born : `${born} - ${dead}`}
      </p>
    </li>
  `).join("");

  listRef.insertAdjacentHTML("beforeend", markup);
}

renderList(scientists);

buttonRef.forEach(btn => {
  btn.addEventListener("click", () => {
    const action = btn.dataset.action;

    switch (action) {

      case "albert": {
        const albert = scientists.filter(
          s => s.name === "Albert" && s.surname === "Einstein"
        );
        renderList(albert, true);
        break;
      }

      case "19st": {
        const res = scientists.filter(
          s => s.born >= 1801 && s.born <= 1900
        );
        renderList(res);
        break;
      }

      case "alphabet": {
        const sorted = [...scientists].sort((a, b) =>
          a.surname.localeCompare(b.surname)
        );
        renderList(sorted);
        break;
      }

      case "sumYears": {
        const sorted = [...scientists].sort(
          (a, b) => (b.dead - b.born) - (a.dead - a.born)
        );
        renderList(sorted);
        break;
      }

      case "youngest": {
        const youngest = scientists.reduce((prev, curr) =>
          curr.born > prev.born ? curr : prev
        );
        renderList([youngest]);
        break;
      }

      case "start'C'": {
        const res = scientists.filter(
          s => s.surname.startsWith("C")
        );
        renderList(res);
        break;
      }

      case "del'A'": {
        const res = scientists.filter(
          s => !s.name.startsWith("A")
        );
        renderList(res);
        break;
      }

      case "mostLeast": {
        const sorted = [...scientists].sort(
          (a, b) => (b.dead - b.born) - (a.dead - a.born)
        );
        renderList([sorted[0], sorted.at(-1)]);
        break;
      }

      case "letters": {
        const res = scientists.filter(
          s => s.name[0] === s.surname[0]
        );
        renderList(res);
        break;
      }
    }
  });
});