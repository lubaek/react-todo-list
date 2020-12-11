import Todos from "./pages/Todos";
import TodoEdit from "./pages/TodoEdit";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Todos} exact />
				<Route path="/:id" component={TodoEdit} />
			</Switch>
		</Router>
	);
}

export default App;
