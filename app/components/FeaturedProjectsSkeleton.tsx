import React from 'react'

const FeaturedProjectsSkeleton = () => {
  return (
    <section>
      <div className="container pt-10 pb-16 md:pt-8 md:pb-20 mx-auto">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl">
            Featured Projects
          </h2>
          <div className="h-6 max-w-[680px] w-full bg-neutral-800 animate-pulse rounded"></div>
        </div>
        <div className="flex flex-col gap-20 w-full">
          {Array.from([1, 2, 3, 4]).map((item) => (
            <div key={item} className="grid grid-col-1 md:grid-cols-2 gap-12 mt-4 items-center">
              {/* Image Skeleton */}
              <div className="bg-neutral-900 p-15 rounded-xl aspect-square flex justify-center items-center">
                <div className="w-full h-full bg-neutral-800 animate-pulse rounded-xl"></div>
              </div>

              {/* Content Skeleton */}
              <div
                className="flex flex-col gap-4 mt-8 md:mt-10"
              >
                {/* Title Skeleton */}
                <div className="h-9 w-3/4 bg-neutral-800 animate-pulse rounded"></div>

                {/* Description Skeleton */}
                <div>
                  <div className="h-6 w-full bg-neutral-800 animate-pulse rounded"></div>
                  <div className="h-6 w-5/6 bg-neutral-800 animate-pulse rounded"></div>
                </div>

                {/* Tech Stack Skeleton */}
                <ul className="mb-4">
                  <li className="h-6 w-32 bg-neutral-800 animate-pulse rounded"></li>
                  {[...Array(3)].map((_, index) => (
                    <li key={index} className="py-4 border-b border-neutral-800 flex gap-3">
                      <div className="w-6 h-6 bg-neutral-800 animate-pulse rounded"></div>
                      <div className="h-6 w-1/3 bg-neutral-800 animate-pulse rounded"></div>
                    </li>
                  ))}
                </ul>

                {/* Buttons Skeleton */}
                <div className="flex gap-4">
                  <div className="h-6 w-32 bg-neutral-800 animate-pulse rounded"></div>
                  <div className="h-6 w-32 bg-neutral-800 animate-pulse rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
};

export default FeaturedProjectsSkeleton;
