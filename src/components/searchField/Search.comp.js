/** @format */

import React, { useState } from "react";
import { books, cities } from "../../assets/data/data";
import "../searchField/search.style.css";
//bootstrap

const Search = ({ arr, inputIteam }) => {
	const [input, setInput] = useState("");
	const handleOnChange = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const searchHandler = (arr) => {
		let finalArray = arr

			.filter((val) => {
				if (input.toLowerCase().length >= 3) {
					return val.toLowerCase().includes(input.toLowerCase());
				}
			})
			.map((val) => {
				console.log("map", val);
				return <li className='output-item'>{val}</li>;
			});
		if (input.length > 0 && input.length <= 2) {
			return <p className='output-item error-msg'>minimum 3 char required</p>;
		} else if (!finalArray.length && input) {
			return <li className='output-item error-msg'>No results found...</li>;
		}
		return finalArray;
	};

	return (
		<div className='search-dropdown'>
			<div>
				<h1>{inputIteam.name}</h1>
			</div>
			<div className='search-bar-container'>
				<div className='input-container'>
					<input
						className='input-field'
						onChange={handleOnChange}
						placeholder={inputIteam.placeholder}
						autoFocus
					/>
				</div>

				<ul className='dropdown-list'>{searchHandler(arr)}</ul>
			</div>
		</div>
	);
};

export default Search;

// 	switch (name) {
// 		case "books":
// 			setBooksInput(value);
// 			break;
// 		case "cities":
// 			setCitiesInput(value);
// 			break;
// 	}
