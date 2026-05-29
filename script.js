const products = [
  {
    name: "abHop",
    file: "abHop.txt",
    updated: "2026-06-10"
  }
];

const list = document.getElementById("productList");
const search = document.getElementById("search");

const viewer = document.getElementById("viewer");
const frame = document.getElementById("policyFrame");
const welcome = document.getElementById("welcome");

function loadPolicy(product, el) {

  document.querySelectorAll(".product")
    .forEach(p => p.classList.remove("active"));

  el.classList.add("active");

  welcome.classList.add("hidden");
  viewer.classList.remove("hidden");

  frame.src = product.file;
}

function render(filter = "") {
  list.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach(p => {

      const div = document.createElement("div");
      div.className = "product";
      div.textContent = p.name;

      div.onclick = () => loadPolicy(p, div);

      list.appendChild(div);
    });
}

search.addEventListener("input", e => render(e.target.value));

document.getElementById("year").textContent = new Date().getFullYear();

render();