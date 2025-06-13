import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
  description: string;
  popular?: boolean;
}

const categories = [
  { id: "all", name: "Все товары", icon: "Grid3X3" },
  { id: "cakes", name: "Торты", icon: "Cookie" },
  { id: "bento", name: "Бенто-торты", icon: "Package" },
  { id: "wedding", name: "Свадебные", icon: "Heart" },
  { id: "mochi", name: "Моти", icon: "Circle" },
  { id: "cupcakes", name: "Капкейки", icon: "Cherry" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Торт Фисташка-малина",
    price: "2500₽",
    image:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&h=400&fit=crop",
    category: "cakes",
    description: "Фисташковый бисквит с малиной",
    popular: true,
  },
  {
    id: 2,
    name: "Бенто-торт Сникерс",
    price: "1200₽",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop",
    category: "bento",
    description: "Шоколадный бисквит с карамелью",
    popular: true,
  },
  {
    id: 3,
    name: "Свадебный торт Premium",
    price: "8500₽",
    image:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=400&h=400&fit=crop",
    category: "wedding",
    description: "Трёхъярусный торт с декором",
  },
  {
    id: 4,
    name: "Моти ассорти",
    price: "800₽",
    image:
      "https://images.unsplash.com/photo-1582716401025-d2d2d2b261e5?w=400&h=400&fit=crop",
    category: "mochi",
    description: "Набор из 6 штук разных вкусов",
  },
  {
    id: 5,
    name: "Капкейки праздничные",
    price: "150₽/шт",
    image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&h=400&fit=crop",
    category: "cupcakes",
    description: "Ванильные с кремом",
  },
  {
    id: 6,
    name: "Торт Красный бархат",
    price: "2800₽",
    image:
      "https://images.unsplash.com/photo-1549312524-cda3c4c8c3c6?w=400&h=400&fit=crop",
    category: "cakes",
    description: "С вишней и сливочным кремом",
  },
];

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Наш каталог
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите категорию и найдите идеальный десерт для вашего праздника
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`category-tab flex items-center gap-2 ${
                activeCategory === category.id ? "active" : ""
              }`}
            >
              <Icon name={category.icon as any} size={18} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="cake-card p-6 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover rounded-xl"
                />
                {product.popular && (
                  <div className="absolute top-3 left-3 bg-cake-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                    🔥 Хит
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-500">
                    {product.price}
                  </span>
                  <Button className="bg-pink-500 hover:bg-pink-600 rounded-xl px-6">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
