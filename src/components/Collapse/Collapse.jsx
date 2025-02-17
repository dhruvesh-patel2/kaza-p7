import PropTypes from "prop-types";
import { useCollapse } from "../../utils/useCollapse";
import "./collapse.scss";

const Collapse = ({ title, content }) => {
  const { activeCollapsibles, toggleCollapse } = useCollapse();
  const isOpen = activeCollapsibles[title] || false;  // Si ce collapsible est ouvert ou fermé

  const handleToggle = () => {
    toggleCollapse(title);  // Toggle l'état de ce collapsible
  };

  return (
    <div className="container_collapse">
      <button
        className={`collapsible ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        {title}
        <span className={`fa-solid fa-chevron-up ${isOpen ? "active" : ""}`}></span>
      </button>
      <div className={`content ${isOpen ? "active" : ""}`}>
        <div className={`content_collapse ${isOpen ? "active" : ""}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Collapse;
