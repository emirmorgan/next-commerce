import HomeScrollable from "./components/Home/HomeScrollable";
import Navbar from "./components/Navbar/Index";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <HomeScrollable />
      </div>
    </main>
  );
}
