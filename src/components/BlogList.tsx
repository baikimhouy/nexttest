async function fetchBlogPosts() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // In a real app, this would be an actual API call
  const mockPosts = [
    {
      id: 1,
      title: "Next.js Suspense Explained",
      excerpt: "Learn how to use Suspense for data fetching",
    },
    {
      id: 2,
      title: "React Server Components",
      excerpt: "Understanding the new paradigm in React",
    },
    {
      id: 3,
      title: "Streaming SSR",
      excerpt: "How Next.js improves performance with streaming",
    },
  ];

  return mockPosts;
}

export default async function BlogList() {
  const posts = await fetchBlogPosts();

  return (
    <div className="grid grid-cols-3 gap-5">
      {posts.map((post) => (
        <div key={post.id} className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <figure>
          <img src="https://picsum.photos/id/101/800/600" alt="card image" className="aspect-video w-full" />
        </figure>
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">The easy way to go</h3>
            <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
          </header>
          <p>
            Experience the simple pleasures of a world with no cars, and only gentle walks through palm tree forests, and fallen coconuts. An island that’s home to extraordinary cliffs, swelling oceans, and mammoth manta rays.
          </p>
        </div>
      </div>
      ))}
    </div>
  );
}
