import { ToastContainer } from "react-toastify";

import Sidebar from "@/components/Dashboard/Layout/Sidebar";
import Topbar from "@/components/Dashboard/Layout/Topbar";

import { DashboardProvider } from "@/context/DashboardContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <div className="flex w-full h-full min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-[calc(100%-50px)]">
          <Topbar />
          <main className="flex flex-col h-full container mx-auto p-4">
            {children}
          </main>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnHover={false}
      />
    </DashboardProvider>
  );
}
