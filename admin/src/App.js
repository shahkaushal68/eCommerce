import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquries from "./pages/Enquries";
import BlogList from "./pages/BlogList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Brands from "./pages/Brands";
import Colours from "./pages/Colours";
import Cutomers from "./pages/Cutomers";
import AddBlog from "./pages/AddBlog";
import AddBlogCat from "./pages/AddBlogCat";
import AddCat from "./pages/AddCat";
import AddColour from "./pages/AddColour";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquries" element={<Enquries />} />
          <Route path="blog-list" element={<BlogList />} />
          <Route path="blog-categories" element={<BlogCatList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
          <Route path="categories" element={<Categories />} />
          <Route path="brands" element={<Brands />} />
          <Route path="colours" element={<Colours />} />
          <Route path="cutomers" element={<Cutomers />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="add-blog-category" element={<AddBlogCat />} />
          <Route path="add-category" element={<AddCat />} />
          <Route path="add-colour" element={<AddColour />} />
          <Route path="add-brand" element={<AddBrand />} />
          <Route path="add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
