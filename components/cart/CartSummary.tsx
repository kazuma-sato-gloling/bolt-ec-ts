'use client';

import { useCart } from '@/lib/hooks/useCart';
import { formatPrice } from '@/lib/utils/price';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function CartSummary() {
  const { items } = useCart();
  
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Card>
      <CardHeader>
        <CardTitle>注文内容</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>小計</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>消費税</span>
            <span>{formatPrice(tax)}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>合計</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">注文する</Button>
      </CardFooter>
    </Card>
  );
}