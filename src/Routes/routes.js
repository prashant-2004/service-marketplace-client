import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import AdminLogin from "../Pages/admin/login";
import AdminSignup from "../Pages/admin/signup";
import Dashboard from "../Pages/admin/dashboard";
import Appointments from "../Pages/admin/appointments";
import Services from "../Pages/admin/services";
import Goals from "../Pages/admin/goals";

import UserLogin from "../Pages/users/login";
import UserSignup from "../Pages/users/signup";
import UserServices from "../Pages/users/services";
import Appoinmentform from "../components/users/services/Appoinmentform";
import Details from "../components/users/services/Details";
function Routess() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-signup" element={<AdminSignup />} />
      <Route path="/admin-dashboard" element={<Dashboard />} />
      <Route path="/admin-appointments" element={<Appointments />} />
      <Route path="/admin-services" element={<Services />} />
      <Route path="/admin-goals" element={<Goals />} />

      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignup />} />
      <Route path="/services" element={<UserServices />} />
      <Route path="/appointmentform" element={<Appoinmentform />}></Route>
      <Route path="/details" element={<Details />}></Route>
    </Routes>
  );
}

export default Routess;
