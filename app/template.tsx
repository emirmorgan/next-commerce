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
        <div className="h-full w-full container mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
