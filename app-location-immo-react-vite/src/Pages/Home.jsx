import appartments from '../data';
import Banner from '../Components/Banner-Home';
import Card from '../components/card';
import Collapse from '../components/collapse';


function Home() {
  return (
    <main>
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
        <Collapse title="Fiabilité"></Collapse>
        <Collapse title="Respect"></Collapse>
        <Collapse title="Service"></Collapse>
        <Collapse title="Sécurité"></Collapse>
    </main>
  );
}

export default Home;
