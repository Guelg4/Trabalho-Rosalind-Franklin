import { Dna, Camera, Users, Award } from 'lucide-react';

const DNADiscovery = () => {
  const discoveries = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: 'A Foto 51',
      description: 'Uma imagem de difração de raios X do DNA que revelou claramente sua estrutura helicoidal. Considerada uma das fotografias mais importantes da história da ciência.',
    },
    {
      icon: <Dna className="w-12 h-12" />,
      title: 'Estrutura Helicoidal',
      description: 'Seus dados mostraram inequivocamente que o DNA tinha formato de hélice, com as bases nitrogenadas no interior e o esqueleto açúcar-fosfato no exterior.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Watson, Crick e Wilkins',
      description: 'Watson e Crick usaram os dados de Franklin (sem seu conhecimento inicial) para construir seu modelo do DNA. Wilkins, colega de Franklin, mostrou a Foto 51 a Watson.',
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Impacto Científico',
      description: 'A descoberta da estrutura do DNA revolucionou a biologia molecular e abriu caminho para a genética moderna, medicina personalizada e biotecnologia.',
    },
  ];

  return (
    <section id="dna" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            A Descoberta do DNA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Como o trabalho meticuloso de Rosalind Franklin revelou os segredos da molécula da vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {discoveries.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-8 md:p-12 rounded-2xl border border-purple-500/30">
          <h3 className="text-3xl font-bold mb-6 text-center text-purple-300">
            O Que Rosalind Franklin Pesquisava?
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Rosalind Franklin utilizava uma técnica chamada <span className="text-blue-400 font-semibold">cristalografia por difração de raios X</span>
              para estudar a estrutura molecular do DNA. Essa técnica envolve bombardear cristais purificados com raios X
              e analisar os padrões de difração resultantes.
            </p>
            <p>
              Em maio de 1952, ela capturou a <span className="text-purple-400 font-semibold">Foto 51</span>, uma imagem incrivelmente nítida
              que mostrava um padrão em forma de X, característico de uma estrutura helicoidal. Esta fotografia
              forneceu evidências diretas e indiscutíveis da forma do DNA.
            </p>
            <p>
              Franklin também calculou as dimensões precisas da molécula, incluindo o <span className="text-blue-400 font-semibold">diâmetro da hélice</span>,
              a <span className="text-blue-400 font-semibold">distância entre as bases</span>, e a <span className="text-blue-400 font-semibold">natureza antiparalela das duas cadeias</span>.
              Seu trabalho foi essencial para que Watson e Crick pudessem construir seu famoso modelo tridimensional do DNA.
            </p>
            <p className="text-yellow-400/80 italic">
              Infelizmente, Franklin não sabia que seus dados estavam sendo compartilhados com Watson e Crick
              antes de sua própria publicação. Quando o modelo foi revelado em 1953, ela reconheceu seus dados nele.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNADiscovery;
