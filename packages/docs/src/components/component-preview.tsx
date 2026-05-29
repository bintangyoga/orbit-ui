"use client";

import { useState } from "react";
import { Button } from "@/components/button";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="rounded-[var(--orbit-radius)] border border-[var(--orbit-border)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--orbit-border)] px-4 py-2 bg-[var(--orbit-muted)]/30">
        <span className="text-xs text-[var(--orbit-muted-foreground)]">Preview</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Preview" : "Code"}
        </Button>
      </div>

      {showCode ? (
        <div className="bg-[var(--orbit-card)] p-4 overflow-x-auto">
          <pre className="text-sm text-[var(--orbit-foreground)]">
            <code>{code}</code>
          </pre>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 p-8 bg-[var(--orbit-card)] min-h-[120px] flex-wrap">
          {children}
        </div>
      )}
    </div>
  );
}
