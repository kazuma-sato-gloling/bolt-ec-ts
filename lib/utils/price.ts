export function formatPrice(price: number): string {
  return new Intl.NumberFormat('ja-JP', {
    style: 'currency',
    currency: 'JPY'
  }).format(price);
}

export function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}