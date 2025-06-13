import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-32 -translate-y-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl translate-x-48 translate-y-48" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Готовы создать торт мечты?
            </h2>
            <p className="text-xl text-pink-100 leading-relaxed max-w-2xl mx-auto">
              Свяжитесь с нами прямо сейчас и получите бесплатную консультацию.
              Обсудим все детали вашего идеального торта!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-scale-in">
            <Button
              size="lg"
              className="bg-white text-pink-600 hover:bg-pink-50 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl font-semibold"
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить сейчас
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-pink-600 text-lg px-8 py-6 rounded-2xl font-semibold"
            >
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать в WhatsApp
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-white animate-slide-up">
            <div className="flex items-center justify-center gap-3">
              <Icon name="Clock" size={24} className="text-pink-200" />
              <span className="font-medium">Ответим в течение часа</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Gift" size={24} className="text-pink-200" />
              <span className="font-medium">Бесплатная консультация</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Icon name="Heart" size={24} className="text-pink-200" />
              <span className="font-medium">Гарантия качества</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
