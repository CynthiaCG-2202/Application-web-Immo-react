import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../styles/component-style/_collapses.scss";

function Collapse({ title, children, className = "default" }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`collapse-container ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="collapse-header">
        <span>{title}</span>
        {isOpen ? <FaChevronDown /> : <FaChevronUp />}
      </button>

      {isOpen && (
        <div className="collapse-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapse;
