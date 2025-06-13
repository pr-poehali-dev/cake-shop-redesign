import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    platform: "vk",
    name: "Анна Петрова",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b88bb464?w=60&h=60&fit=crop&crop=face",
    text: "Заказывала торт на день рождения - все были в восторге! Очень вкусно и красиво 🎂",
    rating: 5,
    date: "2 дня назад",
  },
  {
    id: 2,
    platform: "instagram",
    name: "julia_cake_fan",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face",
    text: "Торт Фисташка-малина просто невероятный! Спасибо Julia Cake ❤️",
    rating: 5,
    date: "5 дней назад",
  },
  {
    id: 3,
    platform: "whatsapp",
    name: "Мария К.",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face",
    text: "Свадебный торт получился именно таким, как мечтали! Все гости спрашивали контакты кондитера",
    rating: 5,
    date: "1 неделю назад",
  },
  {
    id: 4,
    platform: "vk",
    name: "Дмитрий",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
    text: "Быстрая доставка по Симферополю, торт приехал в идеальном состоянии!",
    rating: 5,
    date: "3 дня назад",
  },
];

const platformColors = {
  vk: "bg-blue-500",
  instagram: "bg-gradient-to-r from-purple-500 to-pink-500",
  whatsapp: "bg-green-500",
};

const platformIcons = {
  vk: "Users",
  instagram: "Camera",
  whatsapp: "MessageCircle",
};

const SocialReviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-xl text-gray-600">
            Отзывы из ВКонтакте, Instagram и WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="relative">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-6 h-6 ${platformColors[review.platform]} rounded-full flex items-center justify-center`}
                  >
                    <Icon
                      name={platformIcons[review.platform] as any}
                      size={12}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800">
                      {review.name}
                    </h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>

                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">{review.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center gap-4 mb-6">
            <a
              href="https://vk.com/julia_cake_crimea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Icon name="Users" size={18} />
              ВКонтакте
            </a>
            <a
              href="https://instagram.com/julia_cake_crimea"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              <Icon name="Camera" size={18} />
              Instagram
            </a>
          </div>
          <p className="text-gray-600">
            Следите за нашими новинками и оставляйте отзывы!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialReviews;
