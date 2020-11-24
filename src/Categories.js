import React from "react";

const Categories = ({ items, filterItems }) => {
	let categories = items.map((item) => {
		return item.category;
	});

	let uniqueCategories = [...new Set(categories)];

	return (
		<div className="btn-container">
			{uniqueCategories.map((category, index) => {
				return (
					<button
						key={index}
						className="filter-btn"
						onClick={() => filterItems(category)}
					>
						{category}
					</button>
				);
			})}
			<button className="filter-btn" onClick={() => filterItems("All")}>
				All
			</button>
		</div>
	);
};

export default Categories;
