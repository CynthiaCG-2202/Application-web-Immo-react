import Header from '../components/header';
import Footer from '../components/footer';


function Error404() {
  return (
    <main className="error-page">
      <div className="container-accueil">
        <Header />
        </div>
      <div className="main-container-404">
        <div className="error-name">404</div>
      <div className="subtitle-error">Oups ! La page que vous demandez n'existe pas.</div>
      <a href="/">Retourner sur la page d’accueil</a>
      </div>

      <Footer/>
    </main>
  );
}

export default Error404;
