# ResponsiveSheet — PRD & Implementation Plan

> **Component Name:** ResponsiveSheet
> **Branch:** `feature/responsive-dialog`
> **Author:** Albert (Orbit Design)

---

## PRD (Product Requirements Document)

### Problem Statement

Mobile-first developers face a recurring UX challenge: overlays that feel native on mobile feel awkward on desktop. A **drawer** (bottom sheet) is perfect for mobile — thumb-friendly, familiar gesture pattern. But on desktop/tablet, a **centered dialog** feels more natural and uses screen space better.

Today, developers must:
- Import both `Dialog` and `Drawer` from different libraries
- Write custom breakpoint logic to switch between them
- Maintain two sets of styling and animations
- Handle accessibility separately for each mode

### Solution: ResponsiveSheet

A **single component** that automatically adapts its presentation based on viewport:

| Viewport | Presentation | Behavior |
|---|---|---|
| `< 768px` (mobile) | **Bottom Drawer** | Slides up from bottom, drag-to-dismiss, full-width |
| `≥ 768px` (tablet/desktop) | **Center Dialog** | Centered modal with backdrop, close on overlay click |

One API. One import. Fully responsive. Zero config needed.

### Design Principles

1. **Mobile-first by default** — no props needed, it just works
2. **Orbit glass aesthetic** — frosted backdrop, gradient borders, inner depth
3. **Accessible** — focus trap, escape key, aria attributes, screen reader support
4. **Customizable** — CSS variables for all tokens, CVA variants for styling
5. **Composable** — subcomponents (Root, Trigger, Content, Header, Footer, Title, Description, Close) like Radix pattern
6. **Zero runtime overhead** — static class composition via CVA, breakpoint via CSS media query

### API Design

```tsx
import {
  ResponsiveSheet,
  ResponsiveSheetTrigger,
  ResponsiveSheetContent,
  ResponsiveSheetHeader,
  ResponsiveSheetFooter,
  ResponsiveSheetTitle,
  ResponsiveSheetDescription,
  ResponsiveSheetClose,
} from "@/components/orbit-ui/responsive-sheet"

// Basic usage — fully responsive, no config
<ResponsiveSheet>
  <ResponsiveSheetTrigger>Open</ResponsiveSheetTrigger>
  <ResponsiveSheetContent>
    <ResponsiveSheetHeader>
      <ResponsiveSheetTitle>Edit Profile</ResponsiveSheetTitle>
      <ResponsiveSheetDescription>Make changes to your profile here.</ResponsiveSheetDescription>
    </ResponsiveSheetHeader>
    <div className="py-4">
      {/* Content */}
    </div>
    <ResponsiveSheetFooter>
      <ResponsiveSheetClose>Cancel</ResponsiveSheetClose>
      <Button>Save Changes</Button>
    </ResponsiveSheetFooter>
  </ResponsiveSheetContent>
</ResponsiveSheet>
```

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"default" \| "glass"` | `"default"` | Visual variant |
| `side` | `"bottom" \| "left" \| "right"` | `"bottom"` | Drawer direction (mobile) |
| `breakpoint` | `string` | `"768px"` | CSS breakpoint for switch |
| `modal` | `boolean` | `true` | Whether to render as modal |
| `open` | `boolean` | — | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | — | Controlled change handler |

### Technical Architecture

**Approach: Single DOM tree + CSS media queries**

Instead of rendering two separate component trees and conditionally showing one, we render a single DOM structure and use CSS `@media` queries to switch between drawer and dialog presentation:

```css
/* Mobile: drawer presentation */
@media (max-width: 767px) {
  .orbit-rs-overlay { /* full-screen backdrop */ }
  .orbit-rs-content {
    position: fixed;
    bottom: 0; left: 0; right: 0;
    /* slide-up animation */
  }
}

/* Desktop: dialog presentation */
@media (min-width: 768px) {
  .orbit-rs-overlay { /* centered backdrop */ }
  .orbit-rs-content {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    /* fade-scale animation */
  }
}
```

**Why this approach over conditional rendering:**
- No layout shift or flash during resize
- Single animation context (CSS transitions handle both modes)
- Simpler React code — no `useMediaQuery` hook needed
- SSR-friendly — no hydration mismatch
- Instant switch on resize (pure CSS, no JS re-render)

**Radix UI primitives used:**
- `@radix-ui/react-dialog` — base accessibility (focus trap, aria, escape key)
- Custom CSS layer on top for the responsive drawer/dialog split

### Dependencies

- `@radix-ui/react-dialog` — accessible dialog primitive
- `class-variance-authority` — variant styling (already a dep)
- `@orbit-ui/utils` (internal) — cn helper

### Files to Create/Modify

**CLI Registry (component source template):**
- `packages/cli/src/components/responsive-sheet.ts` — registry definition

**Docs:**
- `packages/docs/src/app/docs/components/responsive-sheet/page.tsx` — docs page
- `packages/docs/src/components/responsive-sheet.tsx` — demo component

---

## Implementation Plan

### Task 1: Create responsive-sheet registry definition

**Objective:** Define the component template string and registry entry for CLI distribution.

**Files:**
- Create: `packages/cli/src/components/responsive-sheet.ts`

**Steps:**
1. Write the full React component source as a template string
2. Include CVA variants (default, glass)
3. Define the responsive CSS via Tailwind classes
4. Export `getResponsiveSheetRegistry()` function
5. Register dependencies: `@radix-ui/react-dialog`, `class-variance-authority`

### Task 2: Register component in CLI index

**Objective:** Wire the new component into the CLI registry so `npx orbit-design add responsive-sheet` works.

**Files:**
- Modify: `packages/cli/src/index.ts`

**Steps:**
1. Import `getResponsiveSheetRegistry`
2. Add to the registry map

### Task 3: Create docs demo component

**Objective:** Create the actual React component file used in the docs site.

**Files:**
- Create: `packages/docs/src/components/responsive-sheet.tsx`

**Steps:**
1. Create the component using Radix Dialog primitives
2. Add responsive CSS classes for mobile/desktop switch
3. Include glass variant styling

### Task 4: Create docs page

**Objective:** Create the documentation page with interactive previews.

**Files:**
- Create: `packages/docs/src/app/docs/components/responsive-sheet/page.tsx`

**Steps:**
1. Page header with description
2. Default usage preview
3. Variant preview (default vs glass)
4. Side direction preview (bottom/left/right)
5. Installation command
6. Usage code example
7. API reference

### Task 5: Update docs sidebar & routes

**Objective:** Add ResponsiveSheet to the docs navigation.

**Files:**
- Modify: `packages/docs/src/components/sidebar.tsx`

### Task 6: Build, verify, commit

**Steps:**
1. Build CLI: `cd packages/cli && npm run build`
2. Verify docs build: `cd packages/docs && npm run build`
3. Commit all changes with conventional commit message

---

## Acceptance Criteria

- [ ] `npx orbit-design add responsive-sheet` installs the component
- [ ] Component renders as bottom drawer on viewports < 768px
- [ ] Component renders as centered dialog on viewports ≥ 768px
- [ ] Glass variant works with frosted backdrop
- [ ] Focus trap, escape key, and aria attributes work
- [ ] Docs page renders with interactive preview
- [ ] All existing components still work (Button, etc.)
