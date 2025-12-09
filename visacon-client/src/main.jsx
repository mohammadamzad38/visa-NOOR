import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AuthProvider from "./AuthProvider.jsx";
import Context from "./components/context/Context.jsx";

import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import All_visa from "./components/visa/All_visa.jsx";
import Add_visa from "./components/visa/Add_visa.jsx";
import My_visa from "./components/visa/My_visa.jsx";
import Privet from "./components/route/Privet.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
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
        element: (
          <Privet>
            <Add_visa />
          </Privet>
        ),
      },
      {
        path: "/my-added-visa",
        element: <My_visa />,
      },
      {
        path: "*",
        element: (
          <div className="py-10 flex items-center justify-center shadow-xl ">
            <img
              className="w-full h-full rounded-xl"
              src="https://i.pinimg.com/originals/8a/e7/0d/8ae70dfb93c679baf9338625749ba5d5.gif"
              alt="404-Error"
            />
          </div>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Context>
        <RouterProvider router={router} />
      </Context>
    </AuthProvider>
  </StrictMode>
);
