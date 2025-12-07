import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import AuthProvider from "./AuthProvider.jsx";
import All_visa from "./components/visa/All_visa.jsx";
import Add_visa from "./components/visa/Add_visa.jsx";
import My_visa from "./components/visa/My_visa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/all-visa",
        element: <All_visa />,
      },
      {
        path: "/add-visa",
        element: <Add_visa />,
      },
      {
        path: "/my-added-visa",
        element: <My_visa />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
