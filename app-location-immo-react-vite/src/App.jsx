import { Routes, Route } from 'react-router-dom';
import Accueil from './assets/pages-router/accueil';
import Apropos from './assets/pages-router/apropos';
import Error404 from './assets/pages-router/error404';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/a-propos" element={<Apropos />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
