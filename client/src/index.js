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
import { CartProvider } from './hooks/cartContext';
import { AuthProvider } from './hooks/authContext.js';
import ProtectedRoute from './components/protectedRoute.js';


const Layout = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);
  const menuClickedRef = React.useRef(false);
  
  const toggleMobileNav = React.useCallback(() => {
    setIsMobileNavOpen(!isMobileNavOpen);
    menuClickedRef.current = true; 
  }, [isMobileNavOpen]);
  
  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    menuClickedRef.current = false; 
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
    path: "/",
    element: <Layout />, 
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ProductsData,
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/blog",
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: (
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: ProductsData,
      },
      {
        path: "/product/:id",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/users/user/cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/promo-items",
        element: (
          <ProtectedRoute>
            <InfiniteSlider />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: GetPromoItems,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);

