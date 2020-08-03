import React,{useState,useEffect} from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LayoutAdmin from './pages/LayoutAdmin';
import LayoutMain from './pages/LayoutMain';
// Admin
import Dashboard from './pages/views/Backend/Dashboard';
import CateList from './pages/views/Backend/Category';
import ProductList from './pages/views/Backend/ProductList';
import AddCate from './pages/views/Backend/Category/add';
import AddProduct from './pages/views/Backend/ProductList/add';
import EditCate from './pages/views/Backend/Category/edit';
// Mainpage
import Home from './pages/views/Frontend/Home';
import Products from './pages/views/Frontend/Products';
import EditProduct from './pages/views/Backend/ProductList/edit';

function App() {
  const[products, setProducts] = useState([]);
  useEffect(()=>{
    axios.get('https://5f26d9ae0824d8001655ec71.mockapi.io/products')
      .then(res=>{
          console.log(res)
          setProducts(res.data)
      })
  })

  const[cate, setCate] = useState([]);
  useEffect(()=>{
    axios.get('https://5f26d9ae0824d8001655ec71.mockapi.io/cate')
      .then(res=>{
          console.log(res)
          setCate(res.data)
      })
  })

  const uploadImage = () => {
    
  }

  const onHandleRemove = (id) => {
    const newProducts = products.filter(product => product.id !== id);
    setProducts(newProducts);
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/admin/:path?/:path?" exact>
            <LayoutAdmin>
              <Switch>
                <Route exact path="/admin">
                  <Dashboard />
                </Route>
                <Route exact path="/admin/cat">
                  <CateList cate={cate} />
                </Route>
                <Route exact path="/admin/products">
                  <ProductList products={products} onRemove={onHandleRemove}/>
                </Route>
                <Route exact path="/admin/products/add">
                  <AddProduct cate={cate}/>
                </Route>
                <Route exact path="/admin/cat/add">
                  <AddCate />
                </Route>
                <Route exact path="/admin/cat/edit/:id">
                  <EditCate />
                </Route>
                <Route exact path="/admin/products/edit/:id">
                  <EditProduct />
                </Route>
              </Switch>
            </LayoutAdmin>
          </Route>
          <Route>
            <LayoutMain>
              <Switch>
                <Route exact path="/">
                  <Home products={products}/>
                </Route>
                <Route exact path="/products">
                  <Products products={products}/>
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
