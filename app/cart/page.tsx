'use client';

import { CartItem } from '@/components/cart/CartItem';
import { CartSummary } from '@/components/cart/CartSummary';
import { useCart } from '@/lib/hooks/useCart';

export default function CartPage() {
  const { items } = useCart();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">ショッピングカート</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {items.length === 0 ? (
            <p className="text-muted-foreground">カートは空です</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </main>
  );
}