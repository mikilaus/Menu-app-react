import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState([]);

	const filterItems = (category) => {
		if (category === "All") {
			setMenuItems(items);
		} else {
			let filteredItems = items.filter((item) => item.category === category);
			setMenuItems(filteredItems);
		}
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories items={items} filterItems={filterItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default App;
