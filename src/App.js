import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LayoutAdmin from './pages/LayoutAdmin';
import LayoutMain from './pages/LayoutMain';

// Admin
import Dashboard from './pages/views/Backend/Dashboard';
import CateList from './pages/views/Backend/Category';
import ProductList from './pages/views/Backend/ProductList';
import Baivietlist from './pages/views/Backend/Baiviet';
import AddCate from './pages/views/Backend/Category/add';
import AddProduct from './pages/views/Backend/ProductList/add';
import EditCate from './pages/views/Backend/Category/edit';
import EditProduct from './pages/views/Backend/ProductList/edit';

// Mainpage
import Home from './pages/views/Frontend/Home';
import Products from './pages/views/Frontend/Products';
import ProductDetails from './pages/views/Frontend/ProductDetails';
import Contact from './pages/views/Frontend/Contact';

import Axios from 'axios';
function App() {
  const[products, setProducts] = useState([]);
  const[cate, setCate] = useState([]);
  const[baiviet, setBaiviet] = useState([]);
  useEffect(() =>{
    Axios.get(`http://localhost:8000/products`)
      .then(res=>{
          setProducts(res.data)
      })
  },[])

  useEffect(()=>{
    Axios.get('http://localhost:8000/cate')
      .then(res=>{
          console.log(res)
          setCate(res.data)
      })
  },[])

  useEffect(()=>{
    Axios.get('http://localhost:8000/baiviet')
      .then(res=>{
          console.log(res)
          setBaiviet(res.data)
      })
  },[])

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/:path?/:path?/:path?" exact>
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Dashboard />
                </Route>
                <Route exact path="/admin/cat">
                  <CateList cate={cate}/>
                </Route>
                <Route exact path="/admin/products">
                  <ProductList products={products} />
                </Route>
                <Route exact path="/admin/products/add">
                  <AddProduct cate={cate} />
                </Route>
                <Route exact path="/admin/baiviet">
                  <Baivietlist baiviet={baiviet} />
                </Route>
                <Route exact path="/admin/cat/add">
                  <AddCate />
                </Route>
                <Route exact path="/admin/cat/edit/:id">
                  <EditCate cate={cate}/>
                </Route>
                <Route exact path="/admin/products/edit/:id">
                  <EditProduct cate={cate} products={products}/>
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route path="/:path?/:path?/:path?" exact>
            <LayoutMain>
              <Switch>
                <Route exact path="/">
                  <Home products={products}/>
                </Route>
                <Route exact path="/products">
                  <Products products={products}/>
                </Route>
                <Route exact path="/details/:id">
                  <ProductDetails products={products}/>
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </LayoutMain>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
