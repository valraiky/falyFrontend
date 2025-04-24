import App from "../App";
import Connexion from "../pages/User/Accueil/authentification/Connexion";
import Inscription from "../pages/User/Accueil/authentification/Inscription";

 export const Router = [
    /****** User  ********/
    {
      path: "/",
      element: <App />
    },

    /****** Autentification ********/
    {
      path: "/Connexion",
      element: <Connexion />
    },
    {
      path: "/Inscription",
      element: <Inscription />
    },
  ]