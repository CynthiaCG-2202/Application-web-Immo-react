import appartments from '../data';
import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Card from '../components/card';


function Accueil() {
  return (
    <main className="page-accueil">
      <div className="container-accueil">
        <Header />
        <Banner />
        <div className="gallery">
          {appartments.map((appartment) => (
            <Card
              key={appartment.id}
              id={appartment.id}
              title={appartment.title}
              image={appartment.cover}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Accueil;
