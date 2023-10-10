export default function ProductDetailsSkeleton() {
  return (
    <div className="flex flex-col my-2">
      <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4" />
      <div className="flex flex-col lg:flex-row gap-2">
        <div className="flex flex-[2]">
          <div
            role="status"
            className="flex items-center justify-center h-full w-full min-h-[450px] bg-gray-300 animate-pulse"
          >
            <svg
              className="w-10 h-10 text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1] flex-col border">
          <div className="flex flex-col p-4">
            <div className="h-4 bg-gray-200 rounded-full w-48 mb-8" />
            <div className="h-3 bg-gray-200 rounded-full w-48 mb-4" />
          </div>
          <div className="w-full h-[1px] rounded-full bg-neutral-200" />
          <div className="flex p-4 gap-2">
            <div
              role="status"
              className="flex items-center justify-center h-full w-full max-w-[100px] min-h-[100px] bg-gray-300 animate-pulse"
            >
              <svg
                className="w-4 h-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div
              role="status"
              className="flex items-center justify-center h-full w-full max-w-[100px] min-h-[100px] bg-gray-300 animate-pulse"
            >
              <svg
                className="w-4 h-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div
              role="status"
              className="flex items-center justify-center h-full w-full max-w-[100px] min-h-[100px] bg-gray-300 animate-pulse"
            >
              <svg
                className="w-4 h-4 text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col p-4">
            <div className="h-2.5 bg-gray-200 rounded-full w-40 mb-4" />
            <div className="flex gap-2">
              <div className="h-3 bg-gray-200 w-32 mb-4" />
              <div className="h-3 bg-gray-200 w-32 mb-4" />
              <div className="h-3 bg-gray-200 w-32 mb-4" />
              <div className="h-3 bg-gray-200 w-32 mb-4" />
            </div>
          </div>
          <div className="flex items-center justify-center mt-auto p-4">
            <div className="w-full h-[40px] bg-gray-300 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
