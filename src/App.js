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
import ProductDetails from './pages/views/Frontend/ProductDetails';
import Contact from './pages/views/Frontend/Contact';
import Axios from 'axios';

function App() {
  const[products, setProducts] = useState([]);
  const[cate, setCate] = useState([]);
  useEffect(() =>{
    axios.get(`http://localhost:8000/products`)
      .then(res=>{
          setProducts(res.data)
      })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:8000/cate')
      .then(res=>{
          console.log(res)
          setCate(res.data)
      })
  },[])

  const uploadImage = () => {
    
  }

  const removeCate = id => {
    Axios.delete(`http://localhost:8000/cate/${id}`).then(res => {
      setCate(cate.filter(cate => cate.id !== id))
    })
  }
  
  const removeProduct = id => {
    Axios.delete(`http://localhost:8000/products/${id}`).then(res => {
      setProducts(products.filter(products => products.id !== id))
    })
		
	}

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
                  <CateList cate={cate} onRemove={removeCate}/>
                </Route>
                <Route exact path="/admin/products">
                  <ProductList products={products} onRemove={removeProduct}/>
                </Route>
                <Route exact path="/admin/products/add">
                  <AddProduct cate={cate} />
                </Route>
                <Route exact path="/admin/cat/add">
                  <AddCate />
                </Route>
                <Route exact path="/admin/cat/edit/:id">
                  <EditCate />
                </Route>
                <Route exact path="/admin/products/edit/:id">
                  <EditProduct cate={cate} products={products}/>
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
