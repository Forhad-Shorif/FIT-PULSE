export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section Skeleton */}
      <div className="mb-12 animate-pulse space-y-4">
        <div className="h-6 w-36 bg-zinc-800 rounded-full" />
        <div className="h-12 w-3/4 sm:w-1/2 bg-zinc-800 rounded-xl" />
        <div className="h-4 w-full sm:w-2/3 bg-zinc-800/60 rounded-lg" />
      </div>

      {/* Section Skeleton */}
      <div className="mb-6 animate-pulse space-y-2">
        <div className="h-8 w-48 bg-zinc-800 rounded-lg" />
        <div className="h-4 w-64 bg-zinc-800/60 rounded-lg" />
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#121316] border border-zinc-800/80 rounded-2xl p-4 animate-pulse space-y-4"
          >
            {/* Image Placeholder */}
            <div className="w-full h-48 bg-zinc-800/80 rounded-xl" />

            {/* Tag Placeholder */}
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-zinc-800 rounded-full" />
              <div className="h-5 w-16 bg-zinc-800 rounded-full" />
            </div>

            {/* Title Placeholder */}
            <div className="h-6 w-3/4 bg-zinc-800 rounded-md" />

            {/* Subtitle Line Placeholder */}
            <div className="h-4 w-1/2 bg-zinc-800/60 rounded-md" />

            {/* Stats Row Placeholder */}
            <div className="pt-2 flex justify-between items-center border-t border-zinc-800/60">
              <div className="h-4 w-12 bg-zinc-800 rounded" />
              <div className="h-4 w-12 bg-zinc-800 rounded" />
              <div className="h-4 w-12 bg-zinc-800 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}