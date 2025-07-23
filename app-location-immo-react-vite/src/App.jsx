import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Error404 from './Pages/Error404';
import House from './Pages/House';
import Layout from './Layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="house/:id" element={<House />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
