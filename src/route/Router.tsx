import App from "../App";
import Inscription from "../pages/User/Accueil/authentification/Inscription";

 export const Router = [
    /****** User  ********/
    {
      path: "/",
      element: <App />
    },
    {
      path: "/Inscription",
      element: <Inscription />
    },
  ]