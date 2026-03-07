import { User, GraduationCap, Microscope, Heart } from 'lucide-react';

const Biography = () => {
  const facts = [
    {
      icon: <User className="w-8 h-8" />,
      title: 'Nascimento',
      description: 'Nascida em 25 de julho de 1920, em Londres, Inglaterra, em uma família judia progressista',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Formação Acadêmica',
      description: 'Graduada em Química pela Universidade de Cambridge e doutorada em 1945',
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: 'Área de Atuação',
      description: 'Especialista em cristalografia por raios X, estudou carvão, DNA e vírus',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Personalidade',
      description: 'Perfeccionista, determinada, brilhante e apaixonada pela precisão científica',
    },
  ];

  return (
    <section id="biografia" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Quem foi Rosalind Franklin?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Uma das mais brilhantes cientistas do século XX, cujo trabalho meticuloso
            foi fundamental para a descoberta da estrutura do DNA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{fact.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">
                {fact.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-xl border border-purple-500/20">
          <p className="text-lg text-gray-300 leading-relaxed">
            Rosalind Franklin foi uma química e cristalógrafa britânica que fez contribuições
            cruciais para a compreensão das estruturas moleculares do DNA, RNA, vírus,
            carvão e grafite. Seu trabalho com raios X produziu a famosa "Foto 51",
            que foi essencial para Watson e Crick desvendarem a estrutura em dupla hélice do DNA.
            Apesar de sua genialidade, ela enfrentou discriminação de gênero e não recebeu
            o reconhecimento merecido durante sua vida.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Biography;
