import { Product } from '../../models/product.js';
import { LocalStorageService } from '../../services/localStorage.service.js';
export class ProductComponent extends HTMLElement {

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
        const id = this.getAttribute('id');
        const name = this.getAttribute('name');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');
        const price = this.getAttribute('price');

        let product = new Product(id, name, description, price, image);
		this.#agregaEstilo(this.shadow);
		this.#render(this.shadow, product);
	}

	#render(shadow, product) {
		shadow.innerHTML += `
		<div class="card">
            <img src="${product.img}" alt="${product.name}">
            <div class="card-details">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <p class="price"> Precio: <span>${product.price}</span></p>
                <button class="add-to-cart-button" id="btn${product.id}">🛒 Añadir al carrito</button>
            </div>
        </div>
		`;

        shadow.getElementById(`btn${product.id}`).addEventListener('click', ()=>{ this.#addToCartHandler(product) })
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/components/product/product.component.css");
		shadow.appendChild(link);
	}

    #addToCartHandler(product){
		LocalStorageService.addProductToCart(product);

		const addToCartEvent = new CustomEvent('addToCart', {
			bubbles: true,
			detail: { product }
		})

		window.dispatchEvent(addToCartEvent);
    }
}
