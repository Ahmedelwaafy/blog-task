import { cn } from "../utils";

function NoItemsMessage({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  return (
    <section
      className={cn(`w-full h-[calc(100vh-180px)] flex-center`, className)}
    >
      <p> {message}</p>
    </section>
  );
}

export default NoItemsMessage;
