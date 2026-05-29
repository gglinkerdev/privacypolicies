const products = [
  {
    name: "abHop",
    file: "abHop.txt",
    updated: "2026-06-10"
  }
];

const list = document.getElementById("productList");
const search = document.getElementById("search");

const title = document.getElementById("policyTitle");
const date = document.getElementById("policyDate");
const text = document.getElementById("policyText");

const welcome = document.getElementById("welcome");
const policyView = document.getElementById("policyView");

async function loadPolicy(product, element) {
  try {
    const res = await fetch(`Policies/${product.file}`);
    const data = await res.text();

    welcome.classList.add("hidden");
    policyView.classList.remove("hidden");

    title.textContent = product.name;
    date.textContent = product.updated;
    text.textContent = data;

    document.querySelectorAll(".product").forEach(el => el.classList.remove("active"));
    element.classList.add("active");

  } catch (err) {
    text.textContent = "Failed to load policy file.";
  }
}

function renderProducts(filter = "") {
  list.innerHTML = "";

  products
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p) => {
      const div = document.createElement("div");
      div.className = "product";
      div.textContent = p.name;

      div.onclick = () => loadPolicy(p, div);

      list.appendChild(div);
    });
}

search.addEventListener("input", (e) => {
  renderProducts(e.target.value);
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();