import { Spoiler } from "@mantine/core";
import { IPostType } from "../types";
import { TFunction } from "i18next";
import useWindowSize from "../Hooks/useWindowSize";

function PostCard({ post, t }: { post: IPostType; t: TFunction }) {
  const { width } = useWindowSize();
  return (
    <div className="PostCard px-5 pt-5 pb-7 border-foreground border-2 rounded-tr-3xl rounded-bl-3xl hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-3xl hover:rounded-br-3xl relative overflow-hidden odd:bg-foreground trns select-none odd:text-background  group hover:bg-accent hover:border-accent  hover:text-background">
      <Spoiler
        maxHeight={width < 560 ? 120 : width < 1200 ? 130 : 100}
        showLabel={t("read_more")}
        hideLabel={t("hide")}
        className=""
      >
        <h5 className="bg-foreground  text-background select-none font-semibold group-odd:bg-background group-odd:text-foreground  trns size-12 flex-center  absolute -top-5 -right-5 rtl:right-auto rtl:-left-5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full pb-2  rtl:pr-2 group-hover:animate-jump">
          {post?.id}
        </h5>
        <h2 className="text-2xl sm:text-xl font-medium  my-5 underline underline-offset-8 decoration-wavy">
          {post?.title}
        </h2>
        <h3 className="text-lg opacity-70f font-light sm:text-base">
          {post?.body}
        </h3>
      </Spoiler>
    </div>
  );
}

export default PostCard;
