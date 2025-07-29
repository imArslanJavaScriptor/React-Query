import { useEffect, useState } from "react";
import { getPostsData } from "../API/api";

function FetchOLD() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPostData = async () => {
    try {
      const res = await getPostsData();
      if (res.status === 200) setData(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostData();
  }, []);

  console.log(data);

  if (loading) return <div>Loading</div>;

  return (
    <div className="flex flex-wrap gap-4 w-full items-center justify-center">
      {data &&
        data?.map((currItem) => {
          const { id, title, body } = currItem;
          return (
            <div
              className="max-w-[400px] w-full rounded-[5px] p-2 overflow-hidden bg-white text-black"
              key={id}
            >
              <p className="line-clamp-1">{title}</p>
              <p className="line-clamp-3">{body}</p>
            </div>
          );
        })}
    </div>
  );
}

export default FetchOLD;
