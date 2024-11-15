const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const form = document.getElementById('searchForm');
const resultContainer = document.getElementById('resultContainer');
const pizzaIdInput = document.getElementById('pizzaIdInput');

window.onload = function () {
    
    const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
    if (lastPizza) {
        renderPizza(lastPizza);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pizzaId = parseInt(pizzaIdInput.value);
    resultContainer.innerHTML = '';

    if (isNaN(pizzaId) || pizzaId <= 0) {
        renderError("Por favor, ingresa un ID válido.");
        return;
    }

    const pizza = pizzas.find(p => p.id === pizzaId);
    if (pizza) {
        renderPizza(pizza);
        localStorage.setItem('lastPizza', JSON.stringify(pizza));
    } else {
        renderError("No se encontró ninguna pizza con ese ID.");
    }

    pizzaIdInput.value = '';
});

function renderPizza(pizza) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h2>${pizza.nombre}</h2>
        <img src="${pizza.imagen}" alt="${pizza.nombre}">
        <p>Precio: $${pizza.precio}</p>
    `;
    resultContainer.appendChild(card);
}

function renderError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.innerText = message;
    resultContainer.appendChild(errorDiv);
}