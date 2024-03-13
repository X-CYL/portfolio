import Route from "./route.js";

//Définir ici vos routes
export const allRoutes = [
  new Route("/", "Accueil", "/pages/home.html"),
<<<<<<< HEAD
  new Route("/about", "A propos", "/pages/about.html"),
  new Route("/contact", "Contactez moi", "/pages/contact.html"),
=======
  new Route("/about", "About me", "./pages/about.html"),
  new Route("/contact", "Contactez moi", "./pages/contact.html"),
>>>>>>> d0af29f (commit last desktop dev)
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "x-cyl portfolio";