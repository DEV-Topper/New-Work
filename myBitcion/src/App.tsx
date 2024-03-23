import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import DashboardRouter from "./router/DashboardRouter";

const App = () => {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
};

export default App;
