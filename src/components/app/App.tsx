import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../header/Header";
import Home from "../home/Home";
import AddNewFood from "../addNewFood/AddNewFood";
import AddNewSet from "../addNewSet/AddNewSet";
import ShowAllSet from "../showAllSet/ShowAllSet";

const App: FC = () => {
	return (
		<>
			<Router>

				<Routes>
					<Route path="/" element={<Header />}>
						<Route path="" element={<Home />} />
						<Route path="addfood" element={<AddNewFood />} />
						<Route path="addset" element={<AddNewSet />} />
						<Route path="allset" element={<ShowAllSet />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;