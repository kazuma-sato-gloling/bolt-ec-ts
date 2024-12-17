'use client';

import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/lib/hooks/useCart";
import { Button } from "@/components/ui/button";

export function Header() {
  const { items } = useCart();
  const itemCount = items.length;

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ECサイト
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-primary">
            商品一覧
          </Link>
          <Link href="/cart" className="hover:text-primary">
            カート ({itemCount})
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <button className="md:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}