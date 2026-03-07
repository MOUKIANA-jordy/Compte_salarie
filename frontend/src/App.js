import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginScreen from "./Screens/auth/LoginScreen";
import ForgotPasswordScreen from "./Screens/auth/ForgotPasswordScreen";
import ResetPasswordScreen from "./Screens/auth/ResetPasswordScreen";
import DashboardScreen from "./Screens/Dashboard/DashboardScreen";
import EmployeesScreen from "./Screens/Employees/EmployeesScreen";
import ProfileScreen from "./Screens/Profile/ProfileScreen";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/reset-password" element={<ResetPasswordScreen />} />

        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/employees" element={<EmployeesScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
