import { Outlet } from "react-router-dom";
import Header from "../Components/header";
import Footer from "../Components/footer";


function Layout () {
    return (
    <main className="main-page">
      <div className="container-page">
        <Header />
        <Outlet/>
        </div>
      <Footer/>
    </main>
  );
}

export default Layout