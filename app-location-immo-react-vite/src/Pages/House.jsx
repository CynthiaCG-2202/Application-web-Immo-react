import { useParams, Navigate } from "react-router-dom";
import appartments from "../data";
import Carousel from "../Components/Carousel";
import Collapse from "../Components/Collapse";
import Stars from "../Components/Stars";

function House() {
    const { id } = useParams();
    const apartment = appartments.find((app) => app.id === id);

    if (!apartment) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="house-container">
            <Carousel pictures={apartment.pictures} />


            <div className="house-info">
                <div className="house-details">
                    <div className="title-location">
                        <div className="house-title">{apartment.title}</div>
                        <div className="location">{apartment.location}</div>
                    </div>
                    <div className="house-host">
                        <div className="host-info">
                            <div className="host-name">{apartment.host.name}</div>
                            <img
                                src={apartment.host.picture}
                                alt={apartment.host.name}
                                className="host-picture"
                            />
                        </div>
                    </div>
                </div>
                <div className="tags-rating">
                    <div className="tags">
                        {apartment.tags.map((tag, index) => (
                            <span key={index} className="tag">
                                <span className="tag-text">{tag}</span>
                            </span>
                        ))}
                    </div>

                    <Stars rating={parseInt(apartment.rating)} />
                </div>
            </div>

            <div className="collapses">
                <Collapse title="Description" variant="house">
                    <p>{apartment.description}</p>
                </Collapse>

                <Collapse title="Équipements" variant="house">
                    <ul>
                        {apartment.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Collapse>

            </div>
        </div>
    );
}

export default House;

