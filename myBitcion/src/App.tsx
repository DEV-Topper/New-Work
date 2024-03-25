import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import RouterScreen from "./router/RouterScreen";

const App = () => {
	return (
		<div>
			<RouterProvider router={Router} />
		</div>
	);
};

export default App;
