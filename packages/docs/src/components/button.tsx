import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "relative inline-flex items-center justify-center gap-2",
    "whitespace-nowrap font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    "rounded-[var(--orbit-radius)] border border-[var(--orbit-border)]",
    "bg-gradient-to-b from-white/[var(--orbit-highlight-opacity)] to-transparent",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "text-[var(--orbit-primary-foreground)]",
          "bg-[var(--orbit-primary)]",
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-transparent before:via-[var(--orbit-gradient-highlight)]/[0.12] before:to-transparent",
          "before:pointer-events-none",
          "after:absolute after:inset-x-[8%] after:top-[55%] after:h-[22%] after:rounded-[inherit]",
          "after:bg-gradient-to-r after:from-transparent",
          "after:via-[var(--orbit-gradient)]/[var(--orbit-gradient-opacity)]",
          "after:to-transparent",
          "after:pointer-events-none",
          "border-transparent",
          "shadow-[inset_0_0_0_1px_var(--orbit-gradient-shadow)/0.3,0_0_calc(var(--orbit-glow-intensity)*40px)_calc(var(--orbit-glow-intensity)*8px)_var(--orbit-gradient-shadow)/0.3]",
          "hover:shadow-[inset_0_0_0_1px_var(--orbit-gradient-shadow)/0.3,0_0_calc(var(--orbit-glow-intensity)*60px)_calc(var(--orbit-glow-intensity)*12px)_var(--orbit-gradient-shadow)/0.45]",
          "hover:brightness-110",
          "active:scale-[0.98] active:brightness-95",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
        secondary: [
          "text-[var(--orbit-secondary-foreground)]",
          "bg-[var(--orbit-secondary)]",
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[0.04] before:to-transparent",
          "before:pointer-events-none",
          "hover:bg-[var(--orbit-secondary)]/80",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
        outline: [
          "text-[var(--orbit-foreground)]",
          "bg-transparent",
          "border-[var(--orbit-border)]",
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[0.03] before:to-transparent",
          "before:pointer-events-none",
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
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[0.1] before:to-transparent",
          "before:pointer-events-none",
          "hover:bg-[var(--orbit-destructive)]/90",
          "focus-visible:ring-[var(--orbit-destructive)]",
        ].join(" "),
        glass: [
          "text-[var(--orbit-foreground)]",
          "bg-[var(--orbit-background)]/40",
          "backdrop-blur-md",
          "border-[var(--orbit-border)]/50",
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[var(--orbit-highlight-opacity)] before:to-transparent",
          "before:pointer-events-none",
          "after:absolute after:inset-x-[12%] after:top-[55%] after:h-[18%] after:rounded-[inherit]",
          "after:bg-gradient-to-r after:from-transparent",
          "after:via-[var(--orbit-gradient)]/[calc(var(--orbit-gradient-opacity)*0.4)]",
          "after:to-transparent",
          "after:pointer-events-none",
          "hover:bg-[var(--orbit-background)]/60",
          "hover:border-[var(--orbit-accent)]/30",
          "focus-visible:ring-[var(--orbit-ring)]",
        ].join(" "),
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
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
