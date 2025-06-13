import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCall = () => {
    window.open("tel:+79787654321", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/79787654321", "_blank");
  };

  const handleYandexMaps = () => {
    window.open("https://yandex.ru/maps/org/julia_cake/123456789/", "_blank");
  };

  const handleVK = () => {
    window.open("https://vk.com/julia_cake_crimea", "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl font-bold text-gray-800">
                Julia Cake
              </h1>
              <p className="text-sm text-gray-600">Торты мечты в Крыму</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#catalog"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Каталог
            </a>
            <a
              href="#reviews"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Отзывы
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-pink-600 font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Ratings & Contact */}
          <div className="hidden md:flex items-center gap-6">
            {/* Ratings */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleYandexMaps}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 bg-red-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Я</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={14}
                    />
                    <span className="text-sm font-semibold">4.8</span>
                  </div>
                  <span className="text-xs text-gray-500">Яндекс</span>
                </div>
              </button>

              <button
                onClick={handleVK}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                  <span className="text-white text-xs font-bold">ВК</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={14}
                    />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                  <span className="text-xs text-gray-500">ВКонтакте</span>
                </div>
              </button>
            </div>

            {/* Contact Buttons */}
            <div className="flex items-center gap-3">
              <Button
                onClick={handleCall}
                variant="outline"
                size="sm"
                className="border-pink-300 text-pink-600 hover:bg-pink-50"
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </Button>
              <Button
                onClick={handleWhatsApp}
                size="sm"
                className="bg-pink-500 hover:bg-pink-600"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-pink-100 py-4">
            <div className="space-y-4">
              <nav className="flex flex-col space-y-2">
                <a
                  href="#catalog"
                  className="text-gray-700 hover:text-pink-600 font-medium py-2"
                >
                  Каталог
                </a>
                <a
                  href="#reviews"
                  className="text-gray-700 hover:text-pink-600 font-medium py-2"
                >
                  Отзывы
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-pink-600 font-medium py-2"
                >
                  О нас
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-pink-600 font-medium py-2"
                >
                  Контакты
                </a>
              </nav>

              <div className="flex flex-col gap-3 pt-4 border-t border-pink-100">
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleYandexMaps}
                    className="flex items-center gap-2"
                  >
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                    <span className="text-sm">4.8 Яндекс</span>
                  </button>
                  <button
                    onClick={handleVK}
                    className="flex items-center gap-2"
                  >
                    <Icon
                      name="Star"
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                    <span className="text-sm">4.9 ВК</span>
                  </button>
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    size="sm"
                    className="flex-1 border-pink-300 text-pink-600"
                  >
                    <Icon name="Phone" size={16} className="mr-2" />
                    Позвонить
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    size="sm"
                    className="flex-1 bg-pink-500 hover:bg-pink-600"
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
