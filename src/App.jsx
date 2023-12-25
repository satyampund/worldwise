import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './pages/Product';
import HomePage from './pages/HomePage';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<p>LIST OF CITIES</p>} />
          <Route path="cities" element={<p>LIST OF CITIES</p>} />
          <Route path="countries" element={<p>LIST OF COURNTRIES</p>} />
          <Route path="form" element={<p>FORM</p>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
