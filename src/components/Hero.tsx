import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Торты мечты от <span className="text-pink-500">Julia Cake</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Создаём уникальные десерты из натуральных ингредиентов. Каждый
                торт включает премиум упаковку и доставку по всему Крыму!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open("tel:+79787654321", "_self")}
                className="bg-pink-500 hover:bg-pink-600 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать торт
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("catalog")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 text-lg px-8 py-6 rounded-2xl"
              >
                <Icon name="Eye" className="mr-2" size={20} />
                Посмотреть каталог
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon
                  name="Star"
                  className="text-yellow-400 fill-current"
                  size={20}
                />
                <span className="font-semibold">4.9/5</span>
                <span className="text-gray-600">(200+ отзывов)</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" className="text-pink-500" size={20} />
                <span className="text-gray-600">Доставка по Крыму</span>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&crop=center"
                alt="Торт Julia Cake"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl floating-animation"
              />
              <div className="absolute -top-4 -right-4 bg-cake-gold text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                💎 Премиум
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-200">
                🎁 + Подарки
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
