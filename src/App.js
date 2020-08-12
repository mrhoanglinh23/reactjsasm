import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, useParams} from 'react-router-dom'
import LayoutAdmin from './pages/LayoutAdmin';
import LayoutMain from './pages/LayoutMain';
// Admin
import Dashboard from './pages/views/Backend/Dashboard';
import CateList from './pages/views/Backend/Category';
import ProductList from './pages/views/Backend/ProductList';
import Baivietlist from './pages/views/Backend/Baiviet';
// Thêm
import AddCate from './pages/views/Backend/Category/add';
import AddProduct from './pages/views/Backend/ProductList/add';
import AddBaiviet from './pages/views/Backend/Baiviet/add';
import AddBlogCat from './pages/views/Backend/Blogcategory/add';
// Sửa
import EditCate from './pages/views/Backend/Category/edit';
import EditProduct from './pages/views/Backend/ProductList/edit';
import EditBlog from './pages/views/Backend/Baiviet/edit';

// Mainpage
import Home from './pages/views/Frontend/Home';
import Products from './pages/views/Frontend/Products';
import ProductDetails from './pages/views/Frontend/ProductDetails';
import Contact from './pages/views/Frontend/Contact';
import Blog from './pages/views/Frontend/Blog';
import Axios from 'axios';
import BlogDetails from './pages/views/Frontend/BlogDetails';
import BlogCategory from './pages/views/Backend/Blogcategory';

import Login from './pages/views/Frontend/Login';
import Register from './pages/views/Frontend/Register';

function App() {
  const[products, setProducts] = useState([]);
  const[cate, setCate] = useState([]);
  const[baiviet, setBaiviet] = useState([]);
  const[blogcat, setBlogcat] = useState([]);

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

  useEffect(()=>{
    Axios.get('http://localhost:8000/danhmucbv')
      .then(res=>{
          console.log(res)
          setBlogcat(res.data)
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
                  <Dashboard cate={cate} products={products} blogcat={blogcat} baiviet={baiviet}/>
                </Route>
                {/* danh mục sản phẩm */}
                <Route exact path="/admin/cat">
                  <CateList cate={cate}/>
                </Route>
                {/* sản phẩm*/}
                <Route exact path="/admin/products">
                  <ProductList products={products} />
                </Route>
                {/* Bài viết */}
                <Route exact path="/admin/baiviet">
                  <Baivietlist baiviet={baiviet} />
                </Route>
                {/* Danh mục bài viết */}
                <Route exact path="/admin/blogcat">
                  <BlogCategory blogcat={blogcat}/>
                </Route>

                {/* Thêm sản phẩm */}
                <Route exact path="/admin/products/add">
                  <AddProduct cate={cate} />
                </Route>
                {/* Thêm danh mục */}
                <Route exact path="/admin/cat/add">
                  <AddCate />
                </Route>
                {/* Thêm bài viết*/}
                <Route exact path="/admin/baiviet/add">
                  <AddBaiviet />
                </Route>
                <Route exact path="/admin/blogcat/add">
                  <AddBlogCat />
                </Route>
                {/*  / Thêm */}
                
                {/* Sửa */}
                <Route exact path="/admin/cat/edit/:id">
                  <EditCate cate={cate}/>
                </Route>
                <Route exact path="/admin/products/edit/:id">
                  <EditProduct cate={cate} products={products}/>
                </Route>
                <Route exact path="/admin/baiviet/edit/:id">
                  <EditBlog baiviet={baiviet} cate={cate}/>
                </Route>
                {/*  / Sửa */}
              </Switch>
            </LayoutAdmin>
          </Route>

          <Route path="/:path?/:path?/:path?" exact>
            <LayoutMain>
              <Switch>
                <Route exact path="/">
                  <Home products={products} cate={cate}/>
                </Route>

                <Route exact path="/products">
                  <Products products={products} cate={cate}/>
                </Route>
                <Route exact path="/products/details/:id">
                  <ProductDetails products={products}/> {/* products={products} dùng để gọi dữ liệu truyền vào route */}
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/blog">
                  <Blog baiviet={baiviet}/>
                </Route>
                <Route exact path="/blog/details/:id">
                  <BlogDetails baiviet={baiviet}/>
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
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
