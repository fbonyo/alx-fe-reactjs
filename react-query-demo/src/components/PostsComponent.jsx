// src/components/PostsComponent.jsx
import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  return res.json();
};

export default function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60,              // 1 minute stale time
    cacheTime: 1000 * 60 * 5,          // 5 minutes in cache after unused
    refetchOnWindowFocus: true,        // automatically refetch when window gains focus
    keepPreviousData: true,            // keep old data while refetching
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>

      <h2>Posts</h2>

      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
