function ProductCardSkeleton() {
  return (
    <div className="max-w-[250px] p-4 border border-gray-100 rounded shadow animate-pulse">
      <div className="flex items-center justify-center h-40 mb-4 bg-gray-300 rounded"></div>
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
      <div className="h-2 bg-gray-200 rounded-full"></div>
    </div>
  );
}

export default ProductCardSkeleton;
