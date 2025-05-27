'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} Matt Puch. Все права защищены.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/" className="text-sm hover:text-gray-300">
              Главная
            </Link>
            <Link href="/about" className="text-sm hover:text-gray-300">
              Об авторе
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 