import { FaStar } from "react-icons/fa";
import "../styles/component-style/_stars.scss";

function Stars({ rating }) {
  const totalStars = 5;

  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <FaStar
          key={index}
          className="star"
          style={{ color: index < rating ? "#ff6060" : "#e3e3e3" }}
        />
      ))}
    </div>
  );
}

export default Stars;

