"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function PrimaryButton({ children, symbol, className }) {
  const [active, setActive] = useState(false);

  return (
    <Button
      className={`text-main-default bg-main-emphasis hover:bg-main-emphasis ${className}`}
      onClick={() => setActive(true)}
      disabled={active ? true : false}
      aria-busy={active}
    >
      {children}
      {symbol && active ? <Loader2 className="animate-spin" /> : symbol}
    </Button>
  );
}
