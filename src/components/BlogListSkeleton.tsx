// components/BlogListSkeleton.js
export default function BlogListSkeleton() {
  return (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="p-4 border rounded-lg shadow-sm">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mt-2 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
