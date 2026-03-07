import { Sparkles, Brain, Flame, BookOpen, Shield, Star } from 'lucide-react';

const Curiosities = () => {
  const curiosities = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Gênio Precoce',
      fact: 'Aos 15 anos, Rosalind já sabia que queria ser cientista, uma escolha incomum para mulheres na época.',
    },
    {
      icon: <Flame className="w-10 h-10" />,
      title: 'Além do DNA',
      fact: 'Antes do DNA, ela fez pesquisas revolucionárias sobre a estrutura molecular do carvão e grafite, contribuindo para máscaras de gás mais eficientes.',
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: 'Perfeccionista',
      fact: 'Era conhecida por sua meticulosidade e rigor científico. Não publicava resultados até ter absoluta certeza de sua precisão.',
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: 'Vírus Pioneiros',
      fact: 'Após deixar o trabalho com DNA, produziu pesquisas fundamentais sobre a estrutura do vírus do mosaico do tabaco e do poliovírus.',
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Reconhecimento Tardio',
      fact: 'Universidades, prédios e até um rover em Marte foram nomeados em sua homenagem décadas após sua morte.',
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: 'Legado Vivo',
      fact: 'Hoje é considerada um símbolo da luta das mulheres na ciência e inspiração para cientistas em todo o mundo.',
    },
  ];

  return (
    <section id="curiosidades" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Curiosidades Fascinantes
          </h2>
          <p className="text-xl text-gray-300">
            Fatos interessantes sobre a vida e o trabalho de Rosalind Franklin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curiosities.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-900/80 to-slate-900/40 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300 group-hover:text-blue-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.fact}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/20 text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="text-blue-400 font-semibold">Você sabia?</span> Rosalind Franklin publicou
            trabalhos científicos importantes em diversas áreas, provando que era muito mais do que "a
            mulher da Foto 51". Sua versatilidade científica e capacidade de dominar diferentes técnicas
            a tornam uma das cientistas mais completas de sua geração.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curiosities;
