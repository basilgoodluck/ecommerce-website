import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './layouts/header'
import Footer from './layouts/footer'
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Products from './pages/products';
import ErrorPage from './pages/error-page';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';
import ProductsData from './api/productsData';
import GetPromoItems from './api/promoItems';
import MobileNav from './layouts/mobileNav';
import WishList from './pages/wishlist';
import Cart from './pages/cart';
import Product from './layouts/product';
import InfiniteSlider from './components/slider';


const Layout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const menuClickedRef = React.useRef(false);
  
  const toggleMobileNav = React.useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
    menuClickedRef.current = true; // Menu was clicked, set ref to true
    console.log('toggle');
  }, [isMobileNavOpen]);
  
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    menuClickedRef.current = false; // Menu is closed, reset ref to false
    console.log('close');
  };
  
  React.useEffect(() => {
    const handleBodyClick = (event) => {
      if (menuClickedRef.current) {
        return;
      }
  
      if (isMobileNavOpen) {
        console.log('handleBody');
      }
    };
  
    document.body.addEventListener('click', handleBodyClick);
  
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, [isMobileNavOpen]);  

  return (
    <div>
      <Header toggleMobileNav={toggleMobileNav} />
      <MobileNav  
        toggleMobileNav={toggleMobileNav} 
        isOpen={isMobileNavOpen} 
        closeMobileNav={closeMobileNav} />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <ErrorPage />,
        loader: ProductsData,
      },
      {
        path: '/about',
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/blog',
        element: <Blog />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorPage />,
        loader: ProductsData,
      },
      {
        path: '/product/:id',
        element: <Product />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/sign-in',
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/wishlist',
        element: <WishList />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/promo-items",
        element: <InfiniteSlider />,
        errorElement: <ErrorPage />,
        loader: GetPromoItems
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
