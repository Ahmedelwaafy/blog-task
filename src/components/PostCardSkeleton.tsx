function PostCardSkeleton() {
  return (
    <div className="PostCard px-5 pt-5 pb-7  rounded-tr-3xl rounded-bl-3xl hover:rounded-tr-none hover:rounded-bl-none hover:rounded-tl-3xl hover:rounded-br-3xl relative overflow-hidden  animate-pulse bg-yellow-100 trns">
      <div className="w-11/12 mx-auto">
        <div className=" size-20 absolute -top-5 -right-5 rtl:right-auto rtl:-left-5 rounded-bl-full rtl:rounded-bl-none rtl:rounded-br-full animate-pulse bg-yellow-300  ">
          ffffffff
        </div>
        <div className="  my-5 underline h-5  animate-pulse bg-yellow-300 rounded-full w-full mx-auto"></div>
        <div className="h-9 animate-pulse bg-yellow-300 rounded-full w-full mx-auto"></div>
        <div className="h-7 animate-puls bg-yellow-400 w-20 rounded-full mt-5"></div>
      </div>
    </div>
  );
}

export default PostCardSkeleton;
