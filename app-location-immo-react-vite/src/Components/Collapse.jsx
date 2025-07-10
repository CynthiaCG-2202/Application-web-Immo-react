import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
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
