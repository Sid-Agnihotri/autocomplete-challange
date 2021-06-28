/** @format */

import React, { useState } from "react";
import Search from "../../components/searchField/Search.comp";
import { cities, books } from "../../assets/data/data";
//CSS
import "./main.style.css";
const obj = { cities: cities, books };
const Main = () => {
	const titles = books.map((book) => {
		return book.title;
	});
	const citiesSerch = { placeholder: " Search Cities...", name: "Cities" };
	const booksSearch = { placeholder: " Search Books...", name: "Books" };

	const handleFocus = (event) => event.target.select();

	return (
		<div className='main'>
			<Search arr={cities} inputIteam={citiesSerch} />
			<Search arr={titles} inputIteam={booksSearch} />
		</div>
	);
};

export default Main;
