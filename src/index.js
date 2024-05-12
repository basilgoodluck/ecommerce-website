import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './layouts/header'
import Footer from './layouts/footer'
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Products from './pages/products';
import ErrorPage from './pages/error-page';
import ProductsData from './api/productsData';
import HeroProducts from './api/heroProducts';
import MobileNav from './layouts/mobileNav';


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
  
  // Your JSX and return statement
  

  return (
    <div>
      <Header toggleMobileNav={toggleMobileNav} />
      <MobileNav  
        toggleMobileNav={toggleMobileNav} 
        isOpen={isMobileNavOpen} 
        closeMobileNav={closeMobileNav} />
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
        loader: HeroProducts,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/products',
        element: <Products />,
        loader: ProductsData,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
