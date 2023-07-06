import HomePromotions from "./components/Home/HomePromotions";
import HomeScrollable from "./components/Home/HomeScrollable";
import Navbar from "./components/Navbar/Index";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-gray-700 font-bold text-xl select-none mx-6">
          Promotions
        </h1>
        <HomePromotions />
        <HomeScrollable title="Example cards">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="flex items-center justify-center text-gray-500 border border-dashed w-44 h-72 shrink-0 bg-neutral-100 border-negative-300"
            >
              {i + 1}
            </div>
          ))}
        </HomeScrollable>
      </div>
    </main>
  );
}
