import { Routes, Route, Navigate } from "react-router";
import DashboardPage from "@/app-pages/dashboard/pages";
import ReservationsPage from "@/app-pages/reservations/pages";
import CalendarPage from "@/app-pages/calendar/pages";
import TicketPage from "@/app-pages/ticket/pages";
import UserPage from "@/app-pages/user/pages";
import LogPages from "@/app-pages/logs/pages";
import PaymentPage from "@/app-pages/payment/pages";
import SettingsPage from "./app-pages/settings/pages";
import LoginPage from "@/app-pages/login/page"; // Add this import

export default function AppRoutes() {
  return (
    <Routes>
      {/* Default route should redirect to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/reservations" element={<ReservationsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/ticket" element={<TicketPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/logs" element={<LogPages />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}
