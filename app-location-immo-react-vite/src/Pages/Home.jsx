import appartments from '../data';
import Banner from '../Components/Banner-Home';
import Card from '../Components/Card';


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
    </main>
  );
}

export default Home;
