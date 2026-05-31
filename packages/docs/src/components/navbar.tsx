"use client";

import { useState } from "react";
import { Button } from "@/components/button";

export function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-16 border-b border-[var(--orbit-border)] bg-[var(--orbit-background)]/80 backdrop-blur-md">
      <div className="flex h-full items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-[var(--orbit-radius)] bg-gradient-to-br from-[var(--orbit-gradient)] to-[var(--orbit-gradient-shadow)] flex items-center justify-center">
            <span className="text-white text-sm font-bold">O</span>
          </div>
          <span className="text-lg font-semibold text-[var(--orbit-foreground)]">
            Orbit Design
          </span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/bintangyoga/orbit-design"
            target="_blank"
            className="text-sm text-[var(--orbit-muted-foreground)] hover:text-[var(--orbit-foreground)] transition-colors"
          >
            GitHub
          </a>
          <Button variant="ghost" size="icon" onClick={toggleTheme}>
            {dark ? "☀" : "☾"}
          </Button>
        </div>
      </div>
    </header>
  );
}
