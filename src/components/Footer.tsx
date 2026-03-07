import { Heart, BookOpen, Microscope } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Início', href: '#hero' },
    { label: 'Biografia', href: '#biografia' },
    { label: 'Linha do Tempo', href: '#timeline' },
    { label: 'DNA', href: '#dna' },
    { label: 'Curiosidades', href: '#curiosidades' },
    { label: 'Legado', href: '#legado' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Rosalind Franklin
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Um portal educativo dedicado a celebrar a vida, o trabalho e o legado
              de uma das maiores cientistas do século XX.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Navegação
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center">
              <Microscope className="w-5 h-5 mr-2" />
              Sobre o Projeto
            </h4>
            <p className="text-gray-400 leading-relaxed">
              Este site foi criado com propósito educacional para divulgar a história
              e as contribuições de Rosalind Franklin para a ciência.
            </p>
          </div>
        </div>

        <div className="border-t border-purple-500/20 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Feito com <Heart className="w-4 h-4 mx-2 text-red-400" /> para inspirar
            futuras gerações de cientistas
          </p>
          <p className="text-gray-500 text-sm mt-2">
            {new Date().getFullYear()} - Portal Educativo Rosalind Franklin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
