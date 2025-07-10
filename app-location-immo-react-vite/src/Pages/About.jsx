import Banner from '../Components/Banner-About';
import Collapse from '../components/collapse';
import aboutCollapses from '../AboutCollapses';

function About() {
  return (
    <main>
      <Banner/>
      <div className='about-collapse'>
      {aboutCollapses.map((item) => (
        <Collapse key={item.id} title={item.title}>
          {item.content}
        </Collapse>
      ))}
      </div>
    </main>
  );
}

export default About;
