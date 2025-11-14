import { LocalStorageService } from '../../services/localStorage.service.js';

export class CartPage extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });
		this.#agregaEstilo(shadow);
		this.#render(shadow);
	}

	#render(shadow) {
		const products = LocalStorageService.getProductsInCart();
		shadow.innerHTML += `
		  	<section class="cart-section">
				<div id="carrito-lista" class="cart-list">
					<h2>🛍️ Tu carrito</h2>
					<p class="cart-subtitle">Productos Agregados</p>
					${this.#renderListCart(products)}
				</div>
			</section>
		`;
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/pages/cart/cart.page.js");
		shadow.appendChild(link);
	}

	#renderListCart(products){
		if(products.length===0){
			return "<p>No hay productos en el carrito</p>"
		}

		return `
			<ul>
				${products.map(product => `<li>${product.name} - ${product.price}</li>`).join('')}
			</ul>
		`
	}
}