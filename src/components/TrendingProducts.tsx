import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const trendingProducts = [
  {
    id: 1,
    name: "Торт Молочная девочка",
    price: "2800₽",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop",
    badge: "🆕 Новинка",
    trending: true,
  },
  {
    id: 2,
    name: "Very Chocolate",
    price: "2600₽",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
    badge: "🔥 Тренд",
    trending: true,
  },
  {
    id: 3,
    name: "Морковный торт",
    price: "2400₽",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=300&fit=crop",
    badge: "⭐ Рекомендуем",
    trending: false,
  },
];

const TrendingProducts = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-gray-800 mb-3">
            Что сейчас в тренде
          </h2>
          <p className="text-gray-600">Самые популярные вкусы этого месяца</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {trendingProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              {/* Main Product Card */}
              <div
                className={`cake-card p-6 ${index === 1 ? "md:scale-110 md:z-10 relative" : ""}`}
              >
                <div className="relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </div>
                  {product.trending && (
                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center text-sm animate-pulse">
                      🔥
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="font-heading text-lg font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-pink-500">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-pink-500 hover:bg-pink-600 rounded-xl"
                    >
                      <Icon name="Plus" size={14} />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              {index === 0 && (
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-cake-gold/20 rounded-full animate-pulse hidden md:block" />
              )}
              {index === 2 && (
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-300/30 rounded-full animate-bounce hidden md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-xl"
          >
            <Icon name="ArrowRight" className="mr-2" size={16} />
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
