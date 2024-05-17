import React from "react";
import RootLayout from "./layouts/MainLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import LoginPage from "./pages/auth/Login";

const App: React.FC = () => {
  return (
    <Router> 
      <Routes>

        <Route 
          path="/"
          element={<RootLayout />}
        > 

          <Route path="" element={<ProtectedRoutes />}> 
            <Route index path="" element={<div>Hello from home</div>} />
          </Route>

          <Route path="auth/login" element={<LoginPage />} />

          <Route path="*" element={<div>Not found</div>} />

        </Route>

      </Routes>
    </Router>
  )
};

export default App;