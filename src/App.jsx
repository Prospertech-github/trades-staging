import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Register from "./pages/register";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Markets from "./pages/dashboard/components/markets";
import Deposit from "./pages/dashboard/components/deposit";
import Withdrawal from "./pages/dashboard/components/withdrawal";
import Profile from "./pages/dashboard/components/profile";
import ProtectedRoutes from "./contexts/ProtectedRoutes"

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        >
          <Route index element={<Navigate to="markets" replace />} />
          <Route path="markets" element={<Markets />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdrawal />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
