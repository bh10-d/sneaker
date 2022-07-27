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
    <AppProvider>
      <Routes>
        <Route exact path="/*" element={<NORMAL_PAGE />} />
        <Route exact path="admin/*" element={<ADMIN_PAGE />} />
      </Routes>
    </AppProvider>
  );
}

export default App;
