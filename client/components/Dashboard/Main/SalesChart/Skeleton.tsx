export default function SalesChartSkeleton() {
  return (
    <div className="flex w-full h-[340px] justify-between">
      <div className="flex items-end gap-2">
        <div className="bg-gray-300 w-[10px] h-[340px] rounded animate-pulse" />
        <div className="bg-gray-300 w-[8px] h-[280px] rounded animate-pulse" />
      </div>
      <div className="flex items-end gap-2">
        <div className="bg-gray-300 w-[10px] h-[340px] rounded animate-pulse" />
        <div className="bg-gray-300 w-[8px] h-[300px] rounded animate-pulse" />
      </div>
      <div className="flex items-end gap-2">
        <div className="bg-gray-300 w-[10px] h-[340px] rounded animate-pulse" />
        <div className="bg-gray-300 w-[8px] h-[300px] rounded animate-pulse" />
      </div>
      <div className="flex items-end gap-2">
        <div className="bg-gray-300 w-[10px] h-[340px] rounded animate-pulse" />
        <div className="bg-gray-300 w-[8px] h-[300px] rounded animate-pulse" />
      </div>
    </div>
  );
}
