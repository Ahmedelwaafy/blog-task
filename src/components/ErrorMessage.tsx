import { cn } from "../utils";

function ErrorMessage({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  return (
    <section
      className={cn(`w-full h-[calc(100vh-180px)] flex-center text-error`, className)}
    >
      <p>{message}</p>
    </section>
  );
}

export default ErrorMessage;
