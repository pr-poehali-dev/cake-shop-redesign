import Icon from "@/components/ui/icon";

const fillings = [
  {
    id: 1,
    name: "Ванильный классик",
    description:
      "Ванильный бисквит + начинка на выбор (малина, клубника, манго-маракуйя) + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=200&fit=crop",
    popular: true,
  },
  {
    id: 2,
    name: "Шоколадный рай",
    description:
      "Шоколадный бисквит + начинка на выбор (вишня, малина, манго-маракуйя, карамель-банан) + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=200&fit=crop",
    popular: true,
  },
  {
    id: 3,
    name: "Фисташка-малина",
    description: "Фисташковый бисквит + малина + фисташковый крем-чиз",
    image:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300&h=200&fit=crop",
    popular: false,
  },
  {
    id: 4,
    name: "Молочная девочка",
    description:
      "Ванильный бисквит + клубничное конфи + малиновое пюре + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=200&fit=crop",
    popular: false,
  },
  {
    id: 5,
    name: "Красный бархат",
    description:
      "Бисквит красный бархат + начинка на выбор (малина, клубника, вишня) + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1549312524-cda3c4c8c3c6?w=300&h=200&fit=crop",
    popular: true,
  },
  {
    id: 6,
    name: "Сникерс",
    description:
      "Шоколадный бисквит + соленая карамель + арахис + шарики криспи + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    popular: false,
  },
  {
    id: 7,
    name: "Морковный пряный",
    description:
      "Морковный бисквит с пряностями + соленая карамель + компоте из вишни + сливочный крем-чиз",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=300&h=200&fit=crop",
    popular: false,
  },
  {
    id: 8,
    name: "Very Chocolate",
    description:
      "Шоколадный бисквит + шоколадный крем-чиз + на выбор (вишневое компоте, соленая карамель)",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop",
    popular: false,
  },
];

const Fillings = () => {
  return (
    <section className="py-20 bg-cake-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Выберите начинку
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Все начинки готовятся из натуральных ингредиентов без искусственных
            добавок
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fillings.map((filling, index) => (
            <div
              key={filling.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={filling.image}
                  alt={filling.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {filling.popular && (
                  <div className="absolute top-3 right-3 bg-cake-gold text-white px-2 py-1 rounded-full text-xs font-semibold">
                    🔥 Хит
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-4">
                <h3 className="font-heading text-lg font-semibold text-gray-800 mb-2">
                  {filling.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {filling.description}
                </p>

                <div className="mt-4 flex items-center text-pink-600 font-medium text-sm group-hover:text-pink-700 transition-colors">
                  <Icon name="Plus" size={14} className="mr-1" />
                  Выбрать начинку
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
          <Icon name="Info" className="mx-auto mb-4 text-pink-500" size={32} />
          <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
            Персональные пожелания
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Хотите особую начинку или комбинацию вкусов? Мы готовы создать
            уникальный торт специально для вас. Просто напишите нам свои
            пожелания при заказе!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Fillings;
