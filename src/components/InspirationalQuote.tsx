import { Quote } from 'lucide-react';

const InspirationalQuote = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-pink-900/40 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-16 h-16 text-purple-400 mx-auto mb-8" />

          <blockquote className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
            "A ciência e a vida cotidiana não podem e não devem ser separadas.
            A ciência, para mim, dá uma explicação parcial da vida.
            Ela é baseada em fatos, experiência e experimentos."
          </blockquote>

          <p className="text-2xl text-purple-300 font-semibold mb-4">
            Rosalind Franklin
          </p>

          <div className="inline-block bg-slate-900/50 backdrop-blur-sm px-8 py-4 rounded-lg border border-purple-500/30 mt-8">
            <p className="text-lg text-gray-300">
              Uma cientista brilhante que nos ensinou que perseverança,
              precisão e paixão pela verdade são as bases da grande ciência
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-blue-400 mb-2">37</div>
            <p className="text-gray-400">Anos de vida dedicados à ciência</p>
          </div>
          <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
            <p className="text-gray-400">Impacto infinito no mundo</p>
          </div>
          <div className="text-center p-6 bg-slate-900/30 backdrop-blur-sm rounded-xl border border-purple-500/20">
            <div className="text-4xl font-bold text-pink-400 mb-2">1952</div>
            <p className="text-gray-400">Ano da revolucionária Foto 51</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspirationalQuote;
