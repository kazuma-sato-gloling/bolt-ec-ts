import { getProducts } from '@/lib/api/products';
import { ProductGrid } from '@/components/products/ProductGrid';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <ProductGrid products={products} />
    </main>
  );
}