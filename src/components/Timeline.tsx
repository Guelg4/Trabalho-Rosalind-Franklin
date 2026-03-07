import { Calendar } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      year: '1920',
      title: 'Nascimento',
      description: 'Nasce em Londres, Inglaterra, em 25 de julho',
    },
    {
      year: '1938',
      title: 'Entrada em Cambridge',
      description: 'Ingressa na Universidade de Cambridge para estudar Química',
    },
    {
      year: '1945',
      title: 'Doutorado',
      description: 'Obtém seu PhD em Química Física pela Universidade de Cambridge',
    },
    {
      year: '1947-1950',
      title: 'Pesquisa em Paris',
      description: 'Trabalha no Laboratório Central de Serviços Químicos do Estado em Paris, estudando carvão e grafite',
    },
    {
      year: '1951',
      title: "King's College Londres",
      description: 'Inicia trabalho com cristalografia de raios X aplicada ao DNA',
    },
    {
      year: '1952',
      title: 'Foto 51',
      description: 'Captura a famosa imagem de difração de raios X do DNA que revela sua estrutura helicoidal',
    },
    {
      year: '1953',
      title: 'Estrutura do DNA Publicada',
      description: 'Watson e Crick publicam a estrutura do DNA, baseando-se fortemente em seus dados',
    },
    {
      year: '1953-1958',
      title: 'Pesquisa sobre Vírus',
      description: 'Trabalha no Birkbeck College estudando a estrutura molecular de vírus',
    },
    {
      year: '1958',
      title: 'Falecimento',
      description: 'Falece aos 37 anos de câncer de ovário, possivelmente relacionado à exposição aos raios X',
    },
    {
      year: '1962',
      title: 'Prêmio Nobel',
      description: 'Watson, Crick e Wilkins recebem o Nobel. Franklin, já falecida, não é mencionada',
    },
    {
      year: 'Hoje',
      title: 'Reconhecimento',
      description: 'Seu legado é finalmente reconhecido como fundamental para a descoberta do DNA',
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Linha do Tempo
          </h2>
          <p className="text-xl text-gray-300">
            A trajetória de uma cientista extraordinária
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {events.map((event, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 md:-translate-y-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>

              <div
                className={`bg-slate-800/70 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 ${
                  index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                } mt-8 md:mt-0`}
              >
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  {event.year}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">
                  {event.title}
                </h3>
                <p className="text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
