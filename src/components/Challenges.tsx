import { AlertCircle, Users, TrendingDown, Award } from 'lucide-react';

const Challenges = () => {
  const challenges = [
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Machismo na Ciência',
      description: 'Na década de 1950, mulheres cientistas enfrentavam discriminação sistemática. Em Cambridge, mulheres não podiam nem entrar no refeitório dos professores.',
    },
    {
      icon: <TrendingDown className="w-10 h-10" />,
      title: 'Falta de Reconhecimento',
      description: 'Seu trabalho foi fundamental para a descoberta do DNA, mas Watson e Crick receberam todos os créditos iniciais, raramente mencionando sua contribuição.',
    },
    {
      icon: <AlertCircle className="w-10 h-10" />,
      title: 'Trabalho Subestimado',
      description: 'Colegas homens frequentemente desconsideravam suas conclusões e opiniões, apesar de sua expertise técnica ser superior.',
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'Prêmio Nobel Negado',
      description: 'O Nobel de 1962 foi para Watson, Crick e Wilkins. Franklin havia falecido em 1958 e o prêmio não é concedido postumamente. Seu nome nem foi mencionado.',
    },
  ];

  return (
    <section id="desafios" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Desafios e Injustiças
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As barreiras que Rosalind Franklin enfrentou como mulher na ciência
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="text-red-400 mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-red-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 p-8 md:p-12 rounded-2xl border border-red-500/30">
          <h3 className="text-3xl font-bold mb-6 text-center text-purple-300">
            A Controvérsia da Foto 51
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Um dos episódios mais controversos da história da ciência envolve como Watson e Crick
              obtiveram acesso aos dados de Rosalind Franklin. <span className="text-red-400 font-semibold">Maurice Wilkins</span>,
              colega de Franklin no King's College, mostrou a <span className="text-red-400 font-semibold">Foto 51</span> a James Watson
              sem o conhecimento ou permissão dela.
            </p>
            <p>
              Watson descreveu esse momento como uma <span className="text-purple-400 font-semibold">"revelação instantânea"</span> que
              confirmou suas suspeitas sobre a estrutura helicoidal do DNA. Com essas informações cruciais,
              Watson e Crick rapidamente completaram seu modelo.
            </p>
            <p>
              Franklin só descobriu sobre o uso de seus dados quando o artigo de Watson e Crick foi publicado.
              Apesar de ter sido uma colaboração não autorizada, ela manteve sua dignidade profissional e
              continuou seu trabalho científico.
            </p>
            <p className="text-yellow-400/80 italic font-semibold mt-6">
              Hoje, a comunidade científica reconhece que Rosalind Franklin deveria ter sido creditada
              como coautora da descoberta da estrutura do DNA. Seu trabalho não foi apenas "útil" - foi essencial.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-purple-900/30 px-8 py-4 rounded-lg border border-purple-500/30">
            <p className="text-xl text-purple-300 font-semibold">
              "A ciência e a vida cotidiana não podem e não devem ser separadas."
            </p>
            <p className="text-gray-400 mt-2">- Rosalind Franklin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
