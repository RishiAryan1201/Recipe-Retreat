import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Favour from "./components/Favour";
import Details from "./components/Details";
import Error from "./components/Error";
import Footer from "./components/footer";
import GlobalState from "./components/Context";
import Contact from "./components/Contact";
import PrivacyPolicy from "./components/PrivacyPolicy";
// import Body from "./components/Body";
const App = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: (<Home />),
            },
            {
                path: "/favorites",
                element: <Favour />,
            },
            {
                path: "/recipe-item/:id",
                element: <Details />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/Privacy_Policy",
                element: <PrivacyPolicy />,
            }
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <GlobalState><RouterProvider router={appRouter} /></GlobalState>
);
