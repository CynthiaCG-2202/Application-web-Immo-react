import { useParams, Navigate } from "react-router-dom";
import appartments from "../data";
import Carousel from "../Components/Carousel";

function House() {
    const { id } = useParams();

    // Recherche de l'appartement correspondant
    const apartment = appartments.find((app) => app.id === id);

    if (!apartment) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="house-container">
            {/* Carrousel d’images */}
            {apartment.pictures.length > 1 ? (
                <Carousel pictures={apartment.pictures} />
            ) : (
                <img
                    src={apartment.pictures[0]}
                    alt={apartment.title}
                    style={{ width: "100%", borderRadius: "10px" }}
                />
            )}

            <h1>{apartment.title}</h1>
            <p>{apartment.location}</p>

            <div className="host-info">
                <h3>Hôte : {apartment.host?.name}</h3>
                <img
                    src={apartment.host?.picture}
                    alt={apartment.host?.name}
                    style={{ width: "50px", borderRadius: "50%" }}
                />
            </div>

            <p>Note : {apartment.rating} / 5</p>

            <p>{apartment.description}</p>

            <h4>Équipements :</h4>
            <ul>
                {apartment.equipments.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default House;
