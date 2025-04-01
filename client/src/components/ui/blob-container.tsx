import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface BlobContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "neutral";
  type?: "blob" | "blob-alt";
}

const variantStyles = {
  primary: "bg-primary/10",
  secondary: "bg-orange-500/10",
  accent: "bg-pink-500/10",
  neutral: "bg-gray-100"
};

export const BlobContainer = ({
  children,
  className,
  variant = "primary",
  type = "blob",
  ...props
}: BlobContainerProps) => {
  return (
    <div
      className={cn(
        type,
        variantStyles[variant],
        "shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
