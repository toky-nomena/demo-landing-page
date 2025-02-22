import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "container flex flex-col justify-center items-center py-24 max-w-screen-2xl min-h-[calc(100vh-6.2rem)] md:py-32",
        className
      )}
    >
      {children}
    </div>
  );
}
