'use client';

import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/product';
import { Button } from '@/components/ui/button';
import { formatPrice, calculateTotal } from '@/lib/utils/price';
import { useCart } from '@/lib/hooks/useCart';
import { Minus, Plus, Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-4 border-b">
      <div className="relative w-24 h-24">
        <Image
          src={item.images[0]}
          alt={item.name}
          fill
          className="object-cover rounded"
        />
      </div>
      <div className="flex-grow">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-muted-foreground">{formatPrice(item.price)}</p>
        <div className="flex items-center gap-2 mt-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </Button>
          <Button
            variant="destructive"
            size="icon"
            className="ml-auto"
            onClick={() => removeItem(item.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-medium">
          {formatPrice(calculateTotal(item.price, item.quantity))}
        </p>
      </div>
    </div>
  );
}