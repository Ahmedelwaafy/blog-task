import { cn } from "../utils";

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("w-[min(90%,1200px)] mx-auto", className)}>{children}</section>
  );
}

export default Container;
