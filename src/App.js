import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Home from './pages/home/Home.component';
import Product from './pages/product/Product.component';
// import Detail from './pages/detail/Detail.component';
// import Info from './pages/info/Info.component';
// import Cart from './pages/cart/Cart.component';


import './App.css';

function App() {

  const [test, setTest] = useState('');

  useEffect(()=>{
    fetch(`https://sneakerteam.herokuapp.com/api/users`).then(res=>res.json()).then(d=>{console.log(d)
      setTest(d);
    })
  },[])

  // console.log(test)
  return (
      <div className="page-wrapper">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product" element={<Product />} />
          {/* <Route exact path="/detail" element={<Detail />} /> */}
          {/* <Route exact path="/user" element={<Info />} /> */}
          {/* <Route exact path="/cart" element={<Cart />} /> */}
        </Routes>
        <Footer/>
      
      {/* <table>
        <thead>
          <th>Id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
        </thead>
        <tbody>
          {(test!='')?test.map((m)=>(<tr key={m.id}>
              <td>{m.id}</td>
              <td>{m.firstName}</td>
              <td>{m.lastName}</td>
              <td>{m.email}</td>
            </tr>)):(<tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>)}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
