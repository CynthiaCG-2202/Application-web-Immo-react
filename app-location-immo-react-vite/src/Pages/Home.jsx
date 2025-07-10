import appartments from '../data';
import Banner from '../components/banner';
import Card from '../components/card';


function Home() {
  return (
    <main className="home">
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
    </main>
  );
}

export default Home;
