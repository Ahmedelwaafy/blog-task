import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { TFunction } from "i18next";
import { useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { fetcherFunction } from "../services/fetchData";
import { IPostType } from "../types";
import ErrorMessage from "./ErrorMessage";
import NoItemsMessage from "./NoItemsMessage";
import PostCard from "./PostCard";
import PostCardSkeleton from "./PostCardSkeleton";

function PostsList({ t }: { t: TFunction }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const isInitialMount = useRef(true);

  const {
    data,
    isError,
    isPaused,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    isPending,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["Posts", searchParams.get("q") || ""],
    queryFn: ({ pageParam }) =>
      fetcherFunction({
        pageParam,
        query: searchParams.get("q")?.replace(/-/g, " ") || "",
      }),
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage?.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    initialPageParam: 1,
    refetchOnWindowFocus: false,
  });
  console.log("data", data);

  /* const Posts: IPostType[] = useMemo(() => {
    return data?.pages?.reduce((acc: IPostType[], page: IPostType[]) => {
      return [...acc, ...page];
    }, []);
  }, [data]); */
  const Posts = [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 2,
      id: 13,
      title: "dolorum ut in voluptas mollitia et saepe quo animi",
      body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
    },
    {
      userId: 2,
      id: 15,
      title: "eveniet quod temporibus",
      body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
    },
  ];
  console.log("Posts", Posts);

  return (
    <section className="w-3/5 bg- mx-auto md:w-11/12 flex-col-center  ">
      <h1 className="font-semibold uppercase text-2xl text-foreground my-10 decoration-wavy underline underline-offset-8">
        {t("title")}
      </h1>
      <div className="w-full space-y-9">
        {isError || isPaused ? (
          <ErrorMessage message={t("ErrorMessage")} />
        ) : isPending ? (
          Array(15)
            .fill("")
            .map((_, i) => <PostCardSkeleton key={i} />)
        ) : Posts?.length === 0 ? (
          <NoItemsMessage message={t("NoItemsMessage")} />
        ) : (
          Posts?.map((post) => <PostCard key={post?.id} post={post} t={t} />)
        )}
      </div>

      {isFetchingNextPage && (
        <div className="w-full space-y-9 mt-9 ">
          {Array(Number(3))
            .fill("")
            .map((_, i) => (
              <PostCardSkeleton key={i} />
            ))}
        </div>
      )}

      <button
        disabled={isFetchingNextPage}
        className={`show__more--button mt-10 active:scale-95- ${
          isError || isPaused || !hasNextPage || Posts?.length === 0
            ? "hidden"
            : "flex- center"
        }`}
        onClick={() => fetchNextPage()}
      >
        {t("show_more")}
      </button>
    </section>
  );
}

export default PostsList;
