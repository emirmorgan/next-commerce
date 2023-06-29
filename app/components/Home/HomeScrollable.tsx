"use client";

export default function HomeScrollable() {
  return (
    <div className="flex items-center rounded-md w-11/12 bg-slate-50 py-4 px-3 mx-auto overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex gap-3">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-center text-gray-500 border border-dashed w-36 h-36 shrink-0 bg-neutral-100 border-negative-300"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
