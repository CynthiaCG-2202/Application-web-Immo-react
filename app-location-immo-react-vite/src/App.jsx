import { Routes, Route } from 'react-router-dom';
import Accueil from './assets/pages-router/accueil';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
    </Routes>
  );
}

export default App;
