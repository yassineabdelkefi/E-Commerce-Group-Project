import {BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Posts from "./components/pages/Posts"
import Products from "./components/pages/Products"
import SingleProduct from "./components/pages/SingleProduct"
import Error from "./components/pages/Error"
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="about" element={<About/>}/>
<Route path="products" element={<Products/>}/>
<Route path="products/:productId" element={<SingleProduct/>}/>
<Route path="posts" element={<Posts/>}/>
<Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
