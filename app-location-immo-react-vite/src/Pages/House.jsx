import { useParams } from "react-router-dom";
import appartments from "../data";


function House() {
  const { id } = useParams();

  // Recherche l'appartement correspondant à l'id dans le tableau
  const apartment = appartments.find((app) => app.id === id);

  // Si pas trouvé, redirige vers la page 404 (ou tu peux afficher un message)
  if (!apartment) {
    return <Navigate to="/404" replace />;
    // Ou : return <p>Appartement non trouvé</p>;
  }

  return (
    <div>
      <h1>{apartment.title}</h1>
      <img src={apartment.cover} alt={apartment.title} style={{ maxWidth: "400px" }} />
      
      <p>{apartment.description}</p>

      <h3>Hôte : {apartment.host?.name}</h3>
      <img src={apartment.host?.picture} alt={apartment.host?.name} style={{ width: "50px", borderRadius: "50%" }} />

      <p>Localisation : {apartment.location}</p>
      <p>Note : {apartment.rating} / 5</p>

      <h4>Équipements :</h4>
      <ul>
        {apartment.equipments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h4>Photos :</h4>
      <div style={{ display: "flex", gap: "10px", overflowX: "auto" }}>
        {apartment.pictures.map((pic, index) => (
          <img key={index} src={pic} alt={`${apartment.title} - ${index + 1}`} style={{ width: "150px", height: "auto" }} />
        ))}
      </div>
    </div>
  );
}

export default House;
