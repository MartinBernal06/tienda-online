import { ProductService } from '../../services/product.service.js';

export class ProductsPage extends HTMLElement {

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
		this.products = ProductService.getProducts();
	}

	connectedCallback() {
		const cantidadProductos = this.getAttribute("cantidadProductos") || 3;
		this.#agregaEstilo(this.shadow);
		this.#render(this.shadow);
	}

	#render(shadow) {
		shadow.innerHTML += `
		<section class="products-section">
			<div class="card-container">
				${this.products.map(product => this.#renderCard(product)).join('')}
			</div>
		</section>
		`;
	}

	#agregaEstilo(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/pages/products/products.page.css");
		shadow.appendChild(link);
	}

	#renderCard(product){
		return `
			<product-info id="${product.id}" name="${product.name}" description="${product.description}" price="${product.price}" image="${product.img}"></product-info>
		`
	}
}
