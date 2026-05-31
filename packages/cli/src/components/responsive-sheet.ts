import { RegistryItem } from "../registry";

const responsiveSheetComponent = `import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

/**
 * orbit-ui ResponsiveSheet
 *
 * A responsive overlay component that renders as a bottom drawer on mobile
 * and a centered dialog on desktop. Built on Radix Dialog primitives.
 *
 * Mobile (< breakpoint): slides up from bottom — thumb-friendly, gesture-like
 * Desktop (≥ breakpoint): centered modal — spacious, conventional
 *
 * Pure CSS responsive switch — no JS media query hook needed.
 *
 * @see https://orbitdesign.vercel.app
 */

// ── Overlay ──
const ResponsiveSheetOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      // Base: full-screen fixed overlay
      "fixed inset-0 z-50",
      // Backdrop
      "bg-black/60 backdrop-blur-sm",
      // Animation: fade in
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
  // Base styles shared across all modes
  [
    "fixed z-50",
    "border border-[var(--orbit-border)]",
    "rounded-[var(--orbit-radius)]",
    // Glass background
    "bg-[var(--orbit-card)]",
    "shadow-xl",
    // Focus
    "focus:outline-none",
    // Animation base
    "data-[state=open]:animate-in data-[state=closed]:animate-out",
    "data-[state=closed]:duration-200 data-[state=open]:duration-300",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          // Default solid card with subtle depth
          "bg-[var(--orbit-card)]",
        ].join(" "),
        glass: [
          // Frosted glass effect
          "bg-[var(--orbit-card)]/70",
          "backdrop-blur-xl",
          "border-[var(--orbit-border)]/50",
          // Inner glow
          "before:absolute before:inset-0 before:rounded-[inherit]",
          "before:bg-gradient-to-b before:from-white/[var(--orbit-highlight-opacity)] before:to-transparent",
          "before:pointer-events-none before:z-[-1]",
          // Gradient line
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

// CSS for responsive positioning — injected via a style tag approach
// We use Tailwind responsive classes for this
const responsiveSheetContentStyles = \`
/* ── Mobile: Drawer (bottom sheet) ── */
.orbit-rs-content {
  /* Mobile-first: drawer from bottom */
  bottom: 0;
  left: 0;
  right: 0;
  top: auto;
  width: 100%;
  max-height: 85vh;
  border-radius: var(--orbit-radius) var(--orbit-radius) 0 0;
  overflow-y: auto;
  /* Slide up on mobile */
  --tw-enter-translate-y: 100%;
  --tw-exit-translate-y: 100%;
}

/* ── Desktop: Centered Dialog ── */
@media (min-width: 768px) {
  .orbit-rs-content {
    bottom: auto;
    left: 50%;
    right: auto;
    top: 50%;
    width: auto;
    min-width: 400px;
    max-width: 540px;
    max-height: 85vh;
    border-radius: var(--orbit-radius);
    transform: translate(-50%, -50%);
    /* Fade + scale on desktop */
    --tw-enter-translate-y: 0;
    --tw-exit-translate-y: 0;
    --tw-enter-scale: 0.95;
    --tw-exit-scale: 0.95;
    --tw-enter-opacity: 0;
    --tw-exit-opacity: 0;
  }
}
\`;

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
        "orbit-rs-content",
        className
      )}
      // Inject responsive styles
      style={typeof document !== "undefined" && !document.getElementById("orbit-rs-styles")
        ? (() => {
            const style = document.createElement("style");
            style.id = "orbit-rs-styles";
            style.textContent = responsiveSheetContentStyles;
            document.head.appendChild(style);
            return undefined;
          })()
        : undefined
      }
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

export {
  DialogPrimitive as ResponsiveSheetPrimitive,
  ResponsiveSheetOverlay,
  ResponsiveSheetContent,
  ResponsiveSheetHeader,
  ResponsiveSheetFooter,
  ResponsiveSheetTitle,
  ResponsiveSheetDescription,
};

// Convenience re-exports
const ResponsiveSheet = DialogPrimitive.Root;
const ResponsiveSheetTrigger = DialogPrimitive.Trigger;
const ResponsiveSheetClose = DialogPrimitive.Close;

export {
  ResponsiveSheet,
  ResponsiveSheetTrigger,
  ResponsiveSheetClose,
};
`;

export function getResponsiveSheetRegistry(): RegistryItem[] {
  return [
    {
      name: "responsive-sheet",
      type: "registry:ui",
      dependencies: [
        "@radix-ui/react-dialog",
        "class-variance-authority",
        "lucide-react",
      ],
      registryDependencies: ["utils"],
      files: [
        {
          path: "responsive-sheet.tsx",
          content: responsiveSheetComponent,
          type: "registry:component",
        },
      ],
    },
  ];
}
