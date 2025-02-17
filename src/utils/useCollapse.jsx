// useCollapse.jsx
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const CollapseContext = createContext();

const useCollapse = () => useContext(CollapseContext);

const CollapseProvider = ({ children }) => {
  const [activeCollapsibles, setActiveCollapsibles] = useState({});

  const toggleCollapse = (title) => {
    setActiveCollapsibles((prevState) => ({
      ...prevState,
      [title]: !prevState[title], // toggle l'état
    }));
  };

  return (
    <CollapseContext.Provider value={{ activeCollapsibles, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

CollapseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CollapseProvider, useCollapse };
