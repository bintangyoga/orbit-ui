import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Liquid Glass edge sheen — a thin gradient "border" that's only lit on the
// top-left and bottom-right corners. A 135deg gradient runs corner-to-corner
// (bright TL -> transparent middle -> soft BR) and a mask punches out the
// center so only the rounded edge ring remains visible.
const glassShine = [
  "before:content-[''] before:absolute before:inset-0 before:rounded-full",
  "before:-z-[1] before:pointer-events-none before:p-px",
  "before:bg-[linear-gradient(135deg,var(--shine-tl,rgba(255,255,255,0.9))_0%,transparent_38%,transparent_62%,var(--shine-br,rgba(255,255,255,0.5))_100%)]",
  "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
  "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
].join(" ");

const buttonVariants = cva(
  [
    // Liquid Glass base — pill shape, centered content
    "relative inline-flex items-center justify-center gap-1",
    "whitespace-nowrap select-none rounded-full isolate",
    "font-medium [font-feature-settings:'ss16']",
    "[font-family:-apple-system,'SF_Pro_Text','SF_Pro',system-ui,sans-serif]",
    "transition-[transform,filter,box-shadow] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[var(--orbit-background)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        // Blue liquid glass (primary)
        default: [
          "text-white",
          "bg-[linear-gradient(180deg,#0a9dff,#0084f0)]",
          "dark:bg-[linear-gradient(180deg,#3a90f5,#2a7fe6)]",
          "shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.35)]",
          "[--shine-tl:rgba(255,255,255,0.7)] [--shine-br:rgba(255,255,255,0.3)]",
          glassShine,
          "hover:brightness-[1.06]",
          "active:brightness-95",
          "focus-visible:ring-[#0090fe]",
        ].join(" "),
        // Neutral liquid glass — exact layered fill from the design spec
        secondary: [
          "text-[#1A1A1A] dark:text-[#F5F5F5]",
          "[background:linear-gradient(0deg,#F7F7F7,#F7F7F7),linear-gradient(0deg,#DDDDDD,#DDDDDD),rgba(255,255,255,0.65)]",
          "[background-blend-mode:darken,color-burn,normal]",
          "dark:[background:linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)),linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),rgba(204,204,204,0.5)]",
          "dark:[background-blend-mode:normal,normal,color-burn]",
          "shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_0_0_1px_rgba(0,0,0,0.03)]",
          "dark:shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_0_0_1px_rgba(255,255,255,0.08)]",
          "[--shine-tl:rgba(255,255,255,0.95)] [--shine-br:rgba(255,255,255,0.6)]",
          "dark:[--shine-tl:rgba(255,255,255,0.35)] dark:[--shine-br:rgba(255,255,255,0.15)]",
          glassShine,
          "hover:brightness-[0.98] dark:hover:brightness-125",
          "active:brightness-95",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
        outline: [
          "text-[var(--orbit-foreground)]",
          "bg-transparent border border-[var(--orbit-border)]",
          "hover:bg-[var(--orbit-accent)]/10",
          "hover:text-[var(--orbit-accent)]",
          "hover:border-[var(--orbit-accent)]/40",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
        ghost: [
          "text-[var(--orbit-foreground)]",
          "bg-transparent",
          "hover:bg-[var(--orbit-accent)]/10",
          "hover:text-[var(--orbit-accent-foreground)]",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
        destructive: [
          "text-[var(--orbit-destructive-foreground)]",
          "bg-[var(--orbit-destructive)]",
          "shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.25)]",
          "hover:brightness-[1.06]",
          "active:brightness-95",
          "focus-visible:ring-[var(--orbit-destructive)]",
        ].join(" "),
        glass: [
          "text-[var(--orbit-foreground)]",
          "bg-[var(--orbit-background)]/40 backdrop-blur-md",
          "border border-[var(--orbit-border)]/50",
          "shadow-[0_8px_40px_rgba(0,0,0,0.12)]",
          "hover:bg-[var(--orbit-background)]/60",
          "hover:border-[var(--orbit-accent)]/30",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-4 text-[13px] gap-1 [&_svg]:size-4",
        default: "h-11 px-6 text-[15px]",
        lg: "h-12 px-7 text-[17px]",
        icon: "h-11 w-11 px-0",
        "icon-lg": "h-12 w-12 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
