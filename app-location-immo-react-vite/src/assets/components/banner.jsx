import bannerImg from '../images/landscape-1.png';

function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
