// App.jsx
import { HashRouter, Route, Routes } from "react-router-dom";

// Composants
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Pages
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Housing from "./pages/housing/Housing";
import NotFound from "./pages/notfound/NotFound";

// Styles globaux
import "./styles/App.scss";

// Provider pour la gestion du contexte Collapse
import { CollapseProvider } from "./utils/useCollapse";

const App = () => {
  return (
    <HashRouter>
      {/* Header */}
      <Header />

      {/* Gestion du contexte Collapse */}
      <CollapseProvider>
        <Routes>
          {/* Route vers la page d'accueil */}
          <Route path="/" element={<Home />} />

          {/* Route vers la page "À propos" */}
          <Route path="/about" element={<About />} />

          {/* Route dynamique pour afficher un logement spécifique */}
          <Route path="/housing/:housingId" element={<Housing />} />

          {/* Page 404 si l'URL ne correspond à aucune route définie */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CollapseProvider>

      {/* Footer */}
      <Footer />
    </HashRouter>
  );
};

export default App;
