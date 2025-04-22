const container = document.querySelector(".container");
const coffees = [
  {
    name: "Perspiciatis",
    image: "/images/coffee1.jpg"
  },
  {
    name: "Voluptatem",
    image: "data/images/coffee2.jpg"
  },
  {
    name: "Explicabo",
    image: "data/images/coffee3.jpg"
  },
  {
    name: "Rchitecto",
    image: "data/images/coffee4.jpg"
  },
  {
    name: " Beatae",
    image: "data/images/coffee5.jpg"
  },
  {
    name: " Vitae",
    image: "data/images/coffee6.jpg"
  },
  {
    name: "Inventore",
    image: "data/images/coffee7.jpg"
  },
  {
    name: "Veritatis",
    image: "data/images/coffee8.jpg"
  },
  {
    name: "Accusantium",
    image: "data/images/coffee9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("data/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
