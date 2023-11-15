import { Route, Routes, useNavigate } from "react-router-dom";
import LoginPage from "./components/Login/LoginPage";
import SignUpPage from "./components/SignUp/SignUpPage";
import HomePage from "./components/HomePage/HomePage";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

// const isAuthenticated = false;

function App() {
  const navigate = useNavigate();
  // if (!isAuthenticated) {
  //   navigate('/login');
  //   return null; // Render nothing while navigating
  // }
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  );
}

export default App;
