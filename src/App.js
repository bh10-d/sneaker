import { Routes, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Home from './pages/home/Home.component';
import Product from './pages/product/Product.component';
import Detail from './pages/detail/Detail.component';
import Info from './pages/info/Info.component';
import Cart from './pages/cart/Cart.component';
import FAQ from './pages/faq/faq.component';
import About from './pages/about/About.component';
import ErrorPage from './pages/404/ErrorPage.component';
import Contact from './pages/contact/Contact.component';
import './App.css';

function App() {
  return (
    <div className="page-wrapper">
      <AppProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product" element={<Product />} />
            <Route exact path="/detail/:image/:id" element={<Detail />} />
            <Route exact path="/user" element={<Info />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/faq" element={<FAQ />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/404" element={<ErrorPage />} />
          </Routes>
          <Footer />
        {/* <Routes>
          <Route exact path="/admin" element={<Home />} />
        </Routes> */}
      </AppProvider>
    </div>
  );
}

export default App;
