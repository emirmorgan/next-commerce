import { ToastContainer } from "react-toastify";

import Footer from "@/components/Layout/Footer";
import MobileNav from "@/components/Layout/MobileNav";
import Navbar from "@/components/Layout/Navbar";
import ScrollUp from "@/components/Layout/ScrollUp";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ScrollUp />
      <MobileNav />
      <main>
        <div className="h-full w-full container mx-auto p-2">{children}</div>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnHover={false}
      />
      <Footer />
    </>
  );
}
