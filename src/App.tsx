import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import { productsLoader } from "./loaders/productsLoader";
import { Cart } from "./pages/Cart";
import { Summary } from "./pages/Summary";
import { Confirmation } from "./pages/Confirmation";

const basename = "/Robert_Kaliga_Web_Wroclaw";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "", element: <Home />, loader: productsLoader },
        { path: "cart", element: <Cart /> },
        { path: "summary", element: <Summary /> },
      ],
    },
    {
      path: "/confirmation",
      element: <Confirmation />,
    },
  ],
  {
    basename,
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
