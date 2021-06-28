/** @format */

import React from "react";
import Search from "../../components/searchField/Search.comp";
import { cities, books } from "../../assets/data/data";
//CSS
import "./main.style.css";

const Main = () => {
	const citiesSerch = { placeholder: " Search Cities...", name: "Cities" };
	const booksSearch = { placeholder: " Search Books...", name: "Books" };

	return (
		<div className='main'>
			<Search arr={books} inputIteam={booksSearch} />
			<Search arr={cities} inputIteam={citiesSerch} />
		</div>
	);
};

export default Main;
