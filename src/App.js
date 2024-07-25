import Header from "./Components/Header/Header";
import SignUp from "../src/Components/SignUp/SignUp";
import Footer from "../src/Components/Footer/Footer";
import WishlistPage from "./Components/Wishlist/WishlistPage";
import Login from "../src/Components/Login/Login";
import About from "../src/Components/About/About";
import Home from "./Components/Home";
import Contact from "./Components/Contact/Contact";
import Cart2 from "./Components/Cart/Cart2";
import ProductView from "./Components/ProductView/ProductView";
import Cart from "./Components/Cart/Cart";
import Addproducts from "./Admin/Addproducts";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import LoginForm from "./Admin/LoginAdmin/LoginPage";
import Checkout from "./Components/Checkout/Checkout"



function AppContent() {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== "/adminpanel" &&
        location.pathname !== "/admin" && (
          <>
            <Header />
          </>
        )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<LoginForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Wishlist" element={<WishlistPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProductView" element={<ProductView />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/adminpanel" element={<Addproducts />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {location.pathname !== "/adminpanel" &&
        location.pathname !== "/admin" && (
          <>
            <Footer />
          </>
        )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;
