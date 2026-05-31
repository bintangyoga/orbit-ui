"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

// ── Overlay ──
const ResponsiveSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50",
      "bg-black/60 backdrop-blur-sm",
      "data-[state=open]:animate-in data-[state=open]:fade-in-0",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
ResponsiveSheetOverlay.displayName = "ResponsiveSheetOverlay";

// ── Content ──
const responsiveSheetContentVariants = cva(
  [
    "fixed z-50",
    "border border-[var(--orbit-border)]",
    "rounded-[var(--orbit-radius)]",
    "bg-[var(--orbit-card)]",
    "shadow-xl",
    "focus:outline-none",
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:duration-200 data-[state=open]:duration-300",
    "orbit-rs-content",
  ].join(" "),
  {
    variants: {
      variant: {
        default: ["bg-[var(--orbit-card)]"].join(" "),
        glass: [
          "bg-[var(--orbit-card)]/70",
          "backdrop-blur-xl",
          "border-[var(--orbit-border)]/50",
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[var(--orbit-highlight-opacity)] before:to-transparent",
          "before:pointer-events-none before:z-[-1]",
          "after:absolute after:inset-x-[8%] after:top-0 after:h-[1px]",
          "after:bg-gradient-to-r after:from-transparent",
          "after:via-[var(--orbit-gradient)]/[var(--orbit-gradient-opacity)]",
          "after:to-transparent",
          "after:pointer-events-none",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const ResponsiveSheetContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
    VariantProps<typeof responsiveSheetContentVariants>
>(({ className, children, variant, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <ResponsiveSheetOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        responsiveSheetContentVariants({ variant }),
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close
        className={cn(
          "absolute right-4 top-4 rounded-sm opacity-70",
          "transition-opacity hover:opacity-100",
          "focus:outline-none focus:ring-2 focus:ring-[var(--orbit-ring)]",
          "disabled:pointer-events-none",
          "text-[var(--orbit-muted-foreground)]"
        )}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
ResponsiveSheetContent.displayName = "ResponsiveSheetContent";

// ── Header ──
const ResponsiveSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6 pb-0", className)}
    {...props}
  />
);
ResponsiveSheetHeader.displayName = "ResponsiveSheetHeader";

// ── Footer ──
const ResponsiveSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6 pt-0",
      className
    )}
    {...props}
  />
);
ResponsiveSheetFooter.displayName = "ResponsiveSheetFooter";

// ── Title ──
const ResponsiveSheetTitle = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight text-[var(--orbit-foreground)]",
      className
    )}
    {...props}
  />
));
ResponsiveSheetTitle.displayName = "ResponsiveSheetTitle";

// ── Description ──
const ResponsiveSheetDescription = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[var(--orbit-muted-foreground)]", className)}
    {...props}
  />
));
ResponsiveSheetDescription.displayName = "ResponsiveSheetDescription";

// Root & Trigger & Close
const ResponsiveSheet = DialogPrimitive.Root;
const ResponsiveSheetTrigger = DialogPrimitive.Trigger;
const ResponsiveSheetClose = DialogPrimitive.Close;

export {
  ResponsiveSheet,
  ResponsiveSheetTrigger,
  ResponsiveSheetContent,
  ResponsiveSheetHeader,
  ResponsiveSheetFooter,
  ResponsiveSheetTitle,
  ResponsiveSheetDescription,
  ResponsiveSheetClose,
};
