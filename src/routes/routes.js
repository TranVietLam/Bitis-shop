import Home from './../pages/home/home';
import About from './../pages/about/about';
import Contact from './../pages/contact/contact';
import Products from './../pages/products/products';
import ProductDetail from './../pages/productDetail/productDetail';
import Cart from '../pages/cart/cart';
import Error from './../pages/error/error';

const routes = [
    {path : "", component: <Home/>},
    {path : "/home", component: <Home/>},
    {path : "/about", component: <About/>},
    {path : "/contact", component: <Contact/>},
    {path : "/products", component: <Products/>},
    {path : "/products/:id", component: <ProductDetail/>},
    {path : "/cart", component: <Cart/>},
    {path : "*", component: <Error/>},
]

export default routes