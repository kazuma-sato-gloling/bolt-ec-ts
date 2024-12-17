import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const products: Product[] = [
    {
      id: "1",
      name: "プレミアムヘッドフォン",
      description: "高品質なワイヤレスヘッドフォン（ノイズキャンセリング機能付き）",
      price: 29999,
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e"],
      category: "Electronics",
      stock: 50,
      rating: 4.5,
      reviews: 128
    },
    {
      id: "2",
      name: "スマートウォッチ",
      description: "健康管理と通知機能を備えた最新のスマートウォッチ",
      price: 24999,
      images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12"],
      category: "Electronics",
      stock: 30,
      rating: 4.3,
      reviews: 95
    },
    {
      id: "3",
      name: "ワイヤレスイヤホン",
      description: "高音質で快適な装着感のワイヤレスイヤホン",
      price: 15999,
      images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df"],
      category: "Electronics",
      stock: 100,
      rating: 4.7,
      reviews: 203
    },
    {
      id: "4",
      name: "ポータブルスピーカー",
      description: "防水機能付きの高音質ポータブルスピーカー",
      price: 12999,
      images: ["https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"],
      category: "Electronics",
      stock: 45,
      rating: 4.4,
      reviews: 167
    }
  ];

  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find(product => product.id === id) || null;
}