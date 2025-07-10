import logo from '../assets/images/logo-kasa-white.png';


function Footer() {
  return (
    <footer className="footer_kasa">
       <img src={logo} alt="Kasa logo White" className="footer__logo" />
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;