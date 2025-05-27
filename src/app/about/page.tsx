import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Об авторе</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src="/images/author.jpg"
              alt="Matt Puch"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Matt Puch</h2>
              <p className="text-gray-600">
                Художник, фотограф, создатель уникальных визуальных произведений
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">О себе</h3>
              <p className="text-gray-700">
                Здесь будет размещена подробная информация об авторе, его творческом пути,
                достижениях и планах на будущее. Текст может включать описание стиля работы,
                источников вдохновения и философии творчества.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Контакты</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Email: contact@mattpuch.com</li>
                <li>Instagram: @mattpuch</li>
                <li>Twitter: @mattpuch</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Выставки и награды</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Персональная выставка "Взгляд изнутри" (2023)</li>
                <li>Лауреат международного конкурса современного искусства (2022)</li>
                <li>Участник биеннале молодого искусства (2021)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 