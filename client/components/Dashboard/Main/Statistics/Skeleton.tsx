export default function StatisticsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:flex-row gap-3 mt-4">
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 w-12 h-12 rounded-full animate-pulse" />
        <div className="flex flex-col font-semibold ml-4 gap-3">
          <div className="h-2.5 w-20 bg-gray-300 rounded-full" />
          <div className="h-2.5 w-14 bg-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 w-12 h-12 rounded-full animate-pulse" />
        <div className="flex flex-col font-semibold ml-4 gap-3">
          <div className="h-2.5 w-20 bg-gray-300 rounded-full" />
          <div className="h-2.5 w-14 bg-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 w-12 h-12 rounded-full animate-pulse" />
        <div className="flex flex-col font-semibold ml-4 gap-3">
          <div className="h-2.5 w-20 bg-gray-300 rounded-full" />
          <div className="h-2.5 w-14 bg-gray-300 rounded-full" />
        </div>
      </div>
      <div className="flex items-center border rounded p-3">
        <div className="flex items-center justify-center bg-gray-200 w-12 h-12 rounded-full animate-pulse" />
        <div className="flex flex-col font-semibold ml-4 gap-3">
          <div className="h-2.5 w-20 bg-gray-300 rounded-full" />
          <div className="h-2.5 w-14 bg-gray-300 rounded-full" />
        </div>
      </div>
    </div>
  );
}
