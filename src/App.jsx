// Importation des modules nécessaires depuis react-router-dom pour la gestion des routes
import { HashRouter, Route, Routes } from "react-router-dom";

// Importation des composants globaux de l'application
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// Importation des pages principales de l'application
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";

// Importation du fichier global de styles SCSS
import "./styles/App.scss";

// Importation du provider pour la gestion du contexte Collapse
import { CollapseProvider } from "./utils/useCollapse";


const App = () => {
  return (
    <HashRouter>
      {/*integration du header */}
      <Header />

      <CollapseProvider>
        <Routes>
          {/* Route vers la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route vers la page "À propos" */}
          <Route path="/about" element={<About />} />

          {/* Route dynamique pour afficher un logement spécifique en fonction de son ID */}
          <Route path="/housing/:housingId" element={<Housing />} />
          
          {/* Route de fallback qui affiche une page 404 si l'URL ne correspond à aucune route définie */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CollapseProvider>

      {/* Inclusion du footer (pied de page) visible sur toutes les pages */}
      <Footer />
    </HashRouter>
  );
};

// Exportation du composant App pour être utilisé dans l'ensemble du projet
export default App;
