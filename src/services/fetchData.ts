import axios from "axios";

export const fetcherFunction = async ({
  pageParam,
  query,
}: {
  pageParam: number;
  query: string;
}) => {
  const options = {
    url: `${
      import.meta.env.VITE_GET_POSTS
    }?q=${query}&_limit=15&_page=${pageParam}`,
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  const res = await axios(options);
  return res.data;
};
