import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/Login/Login";
const App = () => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route path='/' component={Login} />
			</Switch>
		</div>
	);
};
export default App;
