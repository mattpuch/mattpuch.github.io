export default function News() {
  const newsArticles = [
    {
      id: 1,
      title: 'Новая выставка работ',
      date: '2024-03-15',
      summary: 'Открытие новой выставки работ в городской галерее.',
      content: 'Полное описание выставки и представленных работ...'
    },
    {
      id: 2,
      title: 'Участие в международном конкурсе',
      date: '2024-03-10',
      summary: 'Успешное участие в международном конкурсе современного искусства.',
      content: 'Подробности о конкурсе и достигнутых результатах...'
    },
    // Add more news articles as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Новости</h1>

      <div className="max-w-4xl mx-auto">
        {newsArticles.map((article) => (
          <article
            key={article.id}
            className="mb-8 bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                {article.title}
              </h2>
              <time className="text-gray-500 text-sm mb-4 block">
                {new Date(article.date).toLocaleDateString('ru-RU', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <p className="text-gray-700 mb-4">
                {article.summary}
              </p>
              <div className="text-gray-600">
                {article.content}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
} 