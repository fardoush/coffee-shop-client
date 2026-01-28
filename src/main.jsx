import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthProvider from "./context/AuthProvider";
import Users from "./components/Users";
import About from "./components/About";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import InstagramGallery from "./components/InstagramGallery";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Home,
      },
      {
        path: "about",
        Component: About
      },
      {
        path: "products",
        loader: () => fetch("http://localhost:3000/coffees"),
        Component: Products
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "testimonial",
        Component: Testimonial,
      },
      {
        path: "gallery",
        Component: InstagramGallery,
      },
      {
        path: "coffee/:id",
        Component: CoffeeDetails,
      },
      {
        path: "updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "signin",
        Component: SignIn,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "users",
        loader: ()=> fetch('http://localhost:3000/users'),
        Component: Users
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
