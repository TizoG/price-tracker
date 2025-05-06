import { DashboardLayout } from "./layout/DashboardLayout";
import { AddProduct } from "./pages/AddProduct/AddProduct";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Tables } from "./pages/Tables/Tables";
import { History } from "./pages/History/History";
import { Profile } from "./pages/Profile/Profile";
import { Logout } from "./pages/Logout/Logout";
import { SignUp } from "./pages/SignUp/SignUp";

function App() {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logut" element={<Logout />} />
        <Route path="/sign up" element={<SignUp />} />
      </Routes>
    </DashboardLayout>
  );
}

export default App;
