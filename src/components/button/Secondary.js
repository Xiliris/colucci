"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function SecondaryButton({ children, symbol, className }) {
  const [active, setActive] = useState(false);

  return (
    <Button
      className={`text-main-secondary bg-transparent hover:bg-transparent border-main-secondary border ${className}`}
      onClick={() => setActive(true)}
      disabled={active ? true : false}
      aria-busy={active}
    >
      {children}
      {symbol && active ? <Loader2 className="animate-spin" /> : symbol}
    </Button>
  );
}
