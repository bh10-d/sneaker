import { Routes, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';
import ShopLayout from './routes/shop/ShopLayout.component';
// admin
import AdminLayout from './routes/admin/AdminLayout.component';



const NORMAL_PAGE = () => {
  return (
    <>
      <ShopLayout/>
    </>
  )
}

const ADMIN_PAGE = () => {
  return (
    <>
      <AdminLayout />
    </>
  )
}

function App() {
  return (
<<<<<<< HEAD
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
=======
    <AppProvider>
      <Routes>
        <Route exact path="/*" element={<NORMAL_PAGE />} />
        <Route exact path="admin/*" element={<ADMIN_PAGE />} />
      </Routes>
    </AppProvider>
>>>>>>> 5ccb76a88e645c4e31a44eaf1a60aa989a4df8bd
  );
}

export default App;
