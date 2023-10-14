import { ToastContainer } from "react-toastify";

import Sidebar from "@/components/Dashboard/Layout/Sidebar";
import Topbar from "@/components/Dashboard/Layout/Topbar";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full h-full min-h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Topbar />
          <main className="flex flex-col h-full w-full p-2">{children}</main>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnHover={false}
      />
    </>
  );
}
