
export class ProductsPage extends HTMLElement {

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	connectedCallback() {
		const cantidadProductos = this.getAttribute("cantidadProductos") || 3;
		this.#agregaEstilo(this.shadow);
		this.#render(this.shadow);
	}

	#render(shadow) {
		shadow.innerHTML += `
		<section>
			<div class="card-container">
				THIS IS THE PAGE 1
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
}
