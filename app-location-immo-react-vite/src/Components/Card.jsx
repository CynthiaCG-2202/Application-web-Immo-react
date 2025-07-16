import { Link } from 'react-router-dom';

function Card({ id, title, image }) {
  return (
    <Link to={`/house/${id}`} className="card">
  <div className="card__image-wrapper">
    <img src={image} alt={title} className="card__image" />
    <div className="card__gradient" />
    <h2 className="card__title">{title}</h2>
  </div>
</Link>

  );
}

export default Card;