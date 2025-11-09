import { HeaderComponent } from "./src/components/header/header.component.js"
import { CartPage } from "./src/pages/cart/cart.page.js";
import { FooterComponent } from "./src/components/footer/footer.component.js";
import { ProductsPage } from "./src/pages/products/products.page.js";


//Components
window.customElements.define('header-info', HeaderComponent);
window.customElements.define('footer-info', FooterComponent);
//Pages
window.customElements.define('products-page', ProductsPage);
window.customElements.define('cart-page', CartPage);

