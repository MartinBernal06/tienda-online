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
		shadow.innerHTML += `
		  <section>
			<div id="carrito-lista">
			  THIS IS THE PAGE 2
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
}