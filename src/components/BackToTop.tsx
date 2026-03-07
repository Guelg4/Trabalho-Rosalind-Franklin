import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTop;
