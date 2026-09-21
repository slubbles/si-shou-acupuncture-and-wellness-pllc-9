import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[4px] text-sm font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-[#3d5a3a] text-[#f4f1ea] hover:bg-[#2f4630]",
        outline: "border border-[#161513] text-[#161513] hover:bg-[#161513] hover:text-[#f4f1ea]",
        ghost: "text-[#161513] hover:bg-[#e8e2d6]",
      },
      size: {
        default: "h-11 px-7 py-2",
        lg: "h-12 px-8",
        sm: "h-9 px-4",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}
