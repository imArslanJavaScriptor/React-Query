import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../API/api";

function FetchRQ() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    return (
      <div className="text-red-600 text-center mt-4">
        <p>Error fetching posts:</p>
        <pre className="text-sm bg-red-100 p-2 rounded">{error.message}</pre>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 w-full items-center justify-center">
      {data?.map(({ id, title, body }) => (
        <div
          className="max-w-[400px] w-full rounded-[5px] p-3 overflow-hidden bg-gray-700  border-l-4 border-white"
          key={id}
        >
          <p className="line-clamp-1 font-semibold text-2xl">{title}</p>
          <p className="line-clamp-3 text-lg">{body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchRQ;
