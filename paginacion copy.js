const API_URL = 'https://fakestoreapi.com/products';

const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const searchInput = document.getElementById('search');

let products = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('cart')) || {};

async function fetchProducts() {
    try {
      const res = await fetch(API_URL);
      products = await res.json();
      filteredProducts = [...products];
      renderProducts(filteredProducts);
      loadCategories();
    } catch (error) {
      console.error('Error al cargar productos', error);
        }
  }
  
  function renderProducts(list) {
    productsContainer.innerHTML = '';
    list.forEach(product => {
      const card = document.createElement('div');
      card.className = 'card';
  
      card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <small>${product.category}</small>
        <button onclick="addToCart(${product.id})">Agregar</button>
      `;
  
      productsContainer.appendChild(card);
    });
  }

let pagina_actual = 1;
limit [5];

const contenedor = document.getElementById

const pagina_texto =  1

function paginar (datos, pagina, porpagina) {
  const pagina1 = [1,6]
  const pagina2 = [7,12]
  const pagina3 = [13,18]
  const pagina4 = [19,20]
}

let datos  