import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/excel",
    element: <div>Excel File</div>,
  },
]);

function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}

export default App;
