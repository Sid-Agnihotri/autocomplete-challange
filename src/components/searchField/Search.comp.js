/** @format */

import React, { useState } from "react";

import "../searchField/search.style.css";
//bootstrap

const Search = ({ arr, inputIteam }) => {
	//UseState to store data
	const [input, setInput] = useState("");
	const handleOnChange = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	//Search handler
	const searchHandler = (arr) => {
		let finalArray = arr

			.filter((val) => {
				if (input.toLowerCase().length >= 3) {
					if (typeof val == "object") {
						return val.title.toLowerCase().includes(input.toLowerCase());
					}
					return val.toLowerCase().includes(input.toLowerCase());
				}
			})
			.map((val) => {
				return (
					<div>
						{typeof val == "object" ? (
							<li className='output-item books-list'>
								<p>Title: {val.title}</p>
								<p>Author: {val.author}</p>
							</li>
						) : (
							<li className='output-item'>{val}</li>
						)}
					</div>
				);
			});
		//Form validation

		if (input.length > 0 && input.length <= 2) {
			return (
				<p className='output-item error-msg'>Atleast 3 character required</p>
			);
		} else if (!finalArray.length && input) {
			return <li className='output-item error-msg'>No result found...</li>;
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
