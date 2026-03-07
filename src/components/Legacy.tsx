import { Dna, Microscope, GraduationCap, Users, Heart, TrendingUp } from 'lucide-react';

const Legacy = () => {
  const impacts = [
    {
      icon: <Dna className="w-12 h-12" />,
      title: 'Genética Moderna',
      description: 'Seu trabalho fundamentou toda a genética molecular moderna, incluindo sequenciamento de DNA, terapia gênica e medicina personalizada.',
      stat: '100%',
      label: 'dos estudos de DNA usam sua base',
    },
    {
      icon: <Microscope className="w-12 h-12" />,
      title: 'Biologia Molecular',
      description: 'Suas técnicas de cristalografia são usadas até hoje para estudar proteínas, vírus e outras moléculas biológicas complexas.',
      stat: '70+',
      label: 'anos de impacto científico',
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Medicina',
      description: 'A compreensão do DNA levou a avanços em diagnóstico de doenças, desenvolvimento de medicamentos e tratamentos contra o câncer.',
      stat: 'Milhões',
      label: 'de vidas impactadas',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'Mulheres na Ciência',
      description: 'Tornou-se um símbolo da luta por igualdade de gênero na ciência, inspirando gerações de cientistas mulheres.',
      stat: '↑ 300%',
      label: 'aumento de mulheres em STEM desde 1960',
    },
  ];

  const honors = [
    'Universidade de Chicago criou o Rosalind Franklin University of Medicine and Science',
    'Prédios e laboratórios em universidades ao redor do mundo levam seu nome',
    'O rover Rosalind Franklin da ESA foi nomeado em sua homenagem',
    'Inúmeros prêmios e bolsas científicas foram criados em seu nome',
    'Sua história é ensinada em escolas como exemplo de excelência científica',
    'É celebrada anualmente no Dia Internacional das Mulheres e Meninas na Ciência',
  ];

  return (
    <section id="legado" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900/20 to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Legado para a Ciência
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Como Rosalind Franklin continua transformando o mundo décadas após sua morte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">{item.description}</p>
              <div className="border-t border-purple-500/20 pt-4">
                <div className="text-3xl font-bold text-blue-400 mb-1">{item.stat}</div>
                <div className="text-sm text-gray-500">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 md:p-12 rounded-2xl border border-purple-500/30 mb-12">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="w-12 h-12 text-purple-400 mr-4" />
            <h3 className="text-3xl font-bold text-purple-300">
              Honras e Reconhecimento
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {honors.map((honor, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-slate-900/30 p-4 rounded-lg"
              >
                <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-gray-300">{honor}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-xl border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-4 text-purple-300">
            Impacto Contínuo
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            O legado de Rosalind Franklin vai muito além de suas descobertas científicas.
            Ela representa a <span className="text-blue-400 font-semibold">perseverança</span>,
            a <span className="text-purple-400 font-semibold">excelência</span> e
            a <span className="text-pink-400 font-semibold">luta por reconhecimento</span> de
            todas as mulheres na ciência. Sua história nos lembra que por trás de cada grande
            descoberta, há pessoas dedicadas cujas contribuições merecem ser celebradas.
            Hoje, ela inspira milhões de jovens cientistas ao redor do mundo a perseguir seus
            sonhos, independentemente dos obstáculos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
