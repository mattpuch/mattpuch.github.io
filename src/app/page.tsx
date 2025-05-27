export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Добро пожаловать на сайт Matt Puch
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Исследуйте мою галерею, видео и последние новости
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Галерея</h2>
              <p className="text-gray-600">
                Просмотрите коллекцию моих работ и проектов
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Видео</h2>
              <p className="text-gray-600">
                Смотрите мои последние видеоработы
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Новости</h2>
              <p className="text-gray-600">
                Узнавайте о последних событиях и обновлениях
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 