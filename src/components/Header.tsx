import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Biografia', href: '#biografia' },
    { label: 'Linha do Tempo', href: '#timeline' },
    { label: 'DNA', href: '#dna' },
    { label: 'Curiosidades', href: '#curiosidades' },
    { label: 'Legado', href: '#legado' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Rosalind Franklin
        </div>

        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/98 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
