import "./App.css";

import CartIcon from "./images/icon-cart.svg";
import DesktopProductImg from "./images/image-product-desktop.jpg";

function App() {
	return (
		<>
			<div className="App">
				<div className="card">
					<div className="card-img">
						<img src={DesktopProductImg} alt="product image" className="img" />
					</div>
					<div className="card-content">
						<small className="category">Perfume</small>
						<h1 className="title">Gabrielle Essence Eau De Parfum</h1>
						<p className="description">
							A floral, solar and voluptuous interpretation composed by Olivier
							Polge, Perfumer-Creator for the House of CHANEL.
						</p>
						<h1 className="price">
							$149.99 <span className="prev-price">$169.99</span>
						</h1>

						<button className="add-to-cart">
							<img src={CartIcon} alt="cart icon" className="cart-icon" /> Add
							to Cart
						</button>
					</div>
				</div>
			</div>

			{/* <div className="attribution">
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by <a href="https://lyr01.github.io/">Hamza Khan</a>.
			</div> */}
		</>
	);
}

export default App;
