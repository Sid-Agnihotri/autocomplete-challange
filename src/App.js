/** @format */

import "./App.css";
import Main from "./pages/mainpage/Main.page";
//component
import Heading from "./components/heading/Heading.comp";

function App() {
	return (
		<div className='App'>
			<Heading />
			<Main></Main>
		</div>
	);
}

export default App;
