import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени нужно для изготовления торта?",
    answer:
      "Обычно на изготовление торта требуется 2-3 дня. Для сложных свадебных тортов может потребоваться до 5 дней. Рекомендуем делать заказ заранее, особенно в праздничные периоды.",
  },
  {
    question: "Доставляете ли вы по всему Крыму?",
    answer:
      "Да, мы доставляем по всему Крыму! Доставка осуществляется в специальном холодильнике личным курьером, чтобы ваш торт прибыл в идеальном состоянии. Также вы можете забрать заказ самостоятельно по адресу: г. Симферополь, ул. Нестерова 36.",
  },
  {
    question: "Что входит в премиум упаковку?",
    answer:
      "В стоимость торта уже включена премиум упаковка: вкуснейший торт, ложечка, свечки, открытки с пожеланиями, конфетти, презентабельная упаковка и мини подарок в качестве приятного дополнения.",
  },
  {
    question: "Можно ли изменить начинку или создать свой вкус?",
    answer:
      "Конечно! У нас есть 8 базовых начинок, но мы всегда готовы создать уникальную комбинацию специально для вас. Просто опишите свои пожелания при оформлении заказа.",
  },
  {
    question: "Используете ли вы натуральные ингредиенты?",
    answer:
      "Да, все наши десерты изготавливаются исключительно из натуральных ингредиентов без искусственных добавок и растительных сливок. Мы заботимся о качестве и вкусе каждого торта.",
  },
  {
    question: "Как оформить заказ?",
    answer:
      "Вы можете оформить заказ через наш сайт, написать в WhatsApp, Instagram или ВКонтакте. Мы обсудим все детали: размер, начинку, дизайн, дату доставки и ответим на все ваши вопросы.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем наличные при получении, банковские карты, переводы через СБП. Предоплата обычно составляет 50% от суммы заказа.",
  },
  {
    question: "Можете ли создать торт без глютена или сахара?",
    answer:
      "Да, мы можем адаптировать рецепт под ваши потребности. У нас есть опыт создания тортов для людей с особыми диетическими требованиями. Обязательно сообщите об этом при заказе.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-800 mb-4">
            Частые вопросы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о наших тортах и услугах
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-2xl px-6 border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 font-heading font-semibold text-gray-800">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 p-8 bg-pink-50 rounded-2xl max-w-3xl mx-auto">
          <h3 className="font-heading text-xl font-semibold text-gray-800 mb-3">
            Не нашли ответ на свой вопрос?
          </h3>
          <p className="text-gray-600 mb-6">
            Свяжитесь с нами любым удобным способом, и мы с радостью ответим на
            все ваши вопросы!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+7999999999"
              className="bg-pink-500 text-white px-6 py-3 rounded-xl hover:bg-pink-600 transition-colors"
            >
              📞 Позвонить
            </a>
            <a
              href="#"
              className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
