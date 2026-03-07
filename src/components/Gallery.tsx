import { Image } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      title: 'Cristalografia de Raios X',
      description: 'Técnica pioneira usada por Franklin',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      title: 'Estrutura do DNA',
      description: 'A dupla hélice revelada',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Laboratório dos Anos 50',
      description: 'Ambiente de trabalho da época',
      gradient: 'from-pink-600 to-red-600',
    },
    {
      title: 'Moléculas e Vírus',
      description: 'Outras pesquisas de Franklin',
      gradient: 'from-red-600 to-orange-600',
    },
    {
      title: 'Padrão de Difração',
      description: 'A famosa Foto 51',
      gradient: 'from-orange-600 to-yellow-600',
    },
    {
      title: 'Legado Científico',
      description: 'Impacto na ciência moderna',
      gradient: 'from-yellow-600 to-green-600',
    },
  ];

  return (
    <section id="galeria" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Galeria Visual
          </h2>
          <p className="text-xl text-gray-300">
            Representações visuais do trabalho e legado de Rosalind Franklin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <Image className="w-16 h-16 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>

              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/50 transition-all duration-300 rounded-xl" />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            As imagens representam conceitos e temas relacionados ao trabalho de Rosalind Franklin
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
