import { LocalStorageService } from "../../services/localStorage.service.js";

export class HeaderComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		const shadow = this.attachShadow({ mode: "open" });
		this.#addStyles(shadow);
		this.#render(shadow);
		window.addEventListener('addToCart', (event) => this.#addToCartHandler(event.detail.product))
	}

	#render(shadow) {
		shadow.innerHTML += `
		<header>
			<div class="header-content">
				<h1 class="logo">LITTLE SHOP</h1>

				<nav>
				<ul>
					<li><a href="/">Home</a></li>
				</ul>
				</nav>

				<div class="cart-container">
				<a href="/cart" class="cart-link">
					<img class="cart" src="./src/assets/images/cart-shopping.png" alt="Cart Icon">
					<span class="cart-counter">0</span>
				</a>
				</div>
			</div>
		</header>
	  `;

	  const cartCounter = this.shadowRoot.querySelector('.cart-counter');
	  cartCounter.textContent = LocalStorageService.getProductsInCart().length;
	}

	#addStyles(shadow) {
		let link = document.createElement("link");
		link.setAttribute("rel", "stylesheet");
		link.setAttribute("href", "./src/components/header/header.component.css");
		shadow.appendChild(link);
	}

	#addToCartHandler(product){
		const cartCounter = this.shadowRoot.querySelector('.cart-counter');
		let currentCounter = parseInt(cartCounter.textContent);
		currentCounter++;
		cartCounter.textContent = currentCounter;
	}
}