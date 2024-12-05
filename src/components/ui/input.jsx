import * as React from "react";
import { cn } from "@/lib/utils";

// Input komponentini forwardRef bilan yozamiz
const Input = React.forwardRef(({ className, type = "text", placeholder, ...props }, ref) => {
  return (
    <input
      ref={ref} // refni shu yerda ishlatish kerak
      type={type}
      className={cn(
        "flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
