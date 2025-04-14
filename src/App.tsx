import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Suspense } from "react";
import { BrowserRouter, useLocation } from "react-router";
import AppRoutes from "@/app-routes";
import { NavbarProvider } from "@/components/NavBarTop/NavBarContext";
import Navbar from "@/components/NavBarTop/NavBar";

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <SidebarProvider>
      {/* Wrapper to ensure Sidebar and Navbar only show when not on login page */}
      <div className="flex min-h-screen w-full"> {/* Full-width flex container */}
        {/* Conditionally render Sidebar only if not on the login page */}
        {!isLoginPage && <AppSidebar className="w-64" />} {/* Fixed sidebar width */}

        <div className="flex flex-col flex-1 w-full"> {/* Content area takes remaining space */}
          {/* Conditionally render Navbar only if not on the login page */}
          <NavbarProvider>
            {!isLoginPage && (
              <div className="w-full">
                <Navbar />
              </div>
            )}

            <Suspense fallback={<div>Loading...</div>}>
              {/* Content Area */}
              <div className={`w-full ${isLoginPage ? "min-h-screen" : "flex-1"}`}>
                <AppRoutes />
              </div>
            </Suspense>
          </NavbarProvider>
        </div>
      </div>
    </SidebarProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
