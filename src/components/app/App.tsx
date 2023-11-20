import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Home from "../home/Home";
import AddNewFood from "../addNewFood/AddNewFood";
import AddNewSet from "../addNewSet/AddNewSet";
import ShowAllSet from "../showAllSet/ShowAllSet";
import SingleSet from "../singleSet/SingleSet";

const App: FC = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/addfood" element={<AddNewFood />} />
						<Route path="/addset" element={<AddNewSet />} />
						<Route path="/allset" element={<ShowAllSet />} />
						<Route path="/set/:id" element={<SingleSet />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;