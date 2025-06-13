import Icon from "@/components/ui/icon";

const advantages = [
  {
    id: 1,
    icon: "Leaf",
    title: "100% натуральные ингредиенты",
    description: "Без искусственных добавок и растительных сливок",
    color: "bg-green-100 text-green-600",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: 2,
    icon: "Gift",
    title: "Премиум упаковка включена",
    description: "Ложечка, свечки, открытки, конфетти и мини подарок",
    color: "bg-purple-100 text-purple-600",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    id: 3,
    icon: "Truck",
    title: "Доставка по всему Крыму",
    description: "В специальном холодильнике личным курьером",
    color: "bg-blue-100 text-blue-600",
    bgGradient: "from-blue-50 to-sky-50",
  },
  {
    id: 4,
    icon: "Clock",
    title: "Точно в срок",
    description: "Гарантируем соблюдение всех сроков изготовления",
    color: "bg-orange-100 text-orange-600",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    id: 5,
    icon: "Heart",
    title: "Индивидуальный подход",
    description: "Создадим торт точно по вашим пожеланиям",
    color: "bg-pink-100 text-pink-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    id: 6,
    icon: "Star",
    title: "200+ довольных клиентов",
    description: "Средняя оценка 4.9/5 в отзывах",
    color: "bg-yellow-100 text-yellow-600",
    bgGradient: "from-yellow-50 to-amber-50",
  },
];

const Advantages = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Почему выбирают Julia Cake
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы создаём не просто торты — мы воплощаем ваши мечты в десертах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className={`group relative p-8 rounded-3xl bg-gradient-to-br ${advantage.bgGradient} hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative z-10">
                <div
                  className={`inline-flex p-4 rounded-2xl ${advantage.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon name={advantage.icon as any} size={32} />
                </div>

                <h3 className="font-heading text-xl font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Decorative background elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
              <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-white/30 rounded-full blur-lg group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-500 mb-2">200+</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Средняя оценка</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-pink-500 mb-2">24/7</div>
              <div className="text-gray-600">Консультации</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
