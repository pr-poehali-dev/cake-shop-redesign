import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-pink-400 mb-4">
              Julia Cake Crimea
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Создаём уникальные десерты из натуральных ингредиентов. Каждый
              торт — это произведение искусства с премиум упаковкой.
            </p>
            <div className="flex gap-4">
              <a
                href="https://vk.com/julia_cake_crimea"
                className="bg-blue-600 p-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a
                href="https://instagram.com/julia_cake_crimea"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all"
              >
                <Icon name="Camera" size={20} />
              </a>
              <a
                href="#"
                className="bg-green-600 p-3 rounded-xl hover:bg-green-700 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Навигация
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#catalog"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Каталог
                </a>
              </li>
              <li>
                <a
                  href="#fillings"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Начинки
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Отзывы
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-300 hover:text-pink-400 transition-colors"
                >
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">
              Контакты
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Icon name="MapPin" size={18} className="text-pink-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  г. Симферополь,
                  <br />
                  ул. Нестерова 36
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-pink-400" />
                <span className="text-gray-300">+7 (999) 999-99-99</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={18} className="text-pink-400" />
                <span className="text-gray-300">Ежедневно 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Julia Cake Crimea. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
