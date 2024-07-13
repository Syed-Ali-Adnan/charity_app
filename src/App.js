import {
  RouterProvider,
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Latest from "./pages/Latest";
import Blogs from "./pages/Blogs";
import Layout from "./pages/Layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Social from "./pages/Social";
import MainPage from "./pages/MainPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/latest",
        element: <Latest />,
      },
      {
        path: "/social",
        element: <Social/>
      },
      {
        path: "/header",
        element: <Header />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/mainPage",
        element: <MainPage />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
