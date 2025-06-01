import { Link } from 'react-router-dom';
import { BookOpen, Languages, GraduationCap, Brain } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Aprenda Idiomas com Facilidade
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-primary-100">
            Domine o coreano e o inglês com recursos interativos, flashcards personalizados e prática eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/letters" className="btn bg-white text-primary-600 hover:bg-primary-50">
              Começar a Aprender
            </Link>
            <Link to="/practice" className="btn bg-primary-600 text-white border border-primary-400 hover:bg-primary-700">
              Praticar Agora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como o Polyglot Notes ajuda você</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <BookOpen className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Letras e Fonemas</h3>
              <p className="text-neutral-600">
                Aprenda a escrita e pronúncia de cada símbolo com exemplos claros e imagens explicativas.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Languages className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vocabulário Temático</h3>
              <p className="text-neutral-600">
                Explore palavras organizadas por temas, com traduções em português, coreano e inglês.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <GraduationCap className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cartões de Memorização</h3>
              <p className="text-neutral-600">
                Crie seus próprios flashcards para revisar e memorizar vocabulário de forma eficiente.
              </p>
            </div>
            
            <div className="card p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-4 w-16 h-16 flex items-center justify-center mb-4">
                <Brain className="text-primary-500" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modo de Prática</h3>
              <p className="text-neutral-600">
                Teste seu conhecimento com exercícios de tradução em um ambiente interativo e desafiador.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Comece sua jornada linguística</h2>
            <p className="text-lg text-neutral-700 mb-8">
              Seja um aprendiz iniciante ou avançado, o Polyglot Notes oferece recursos para todos os níveis.
              Comece explorando os símbolos e sons, depois construa seu vocabulário com nosso sistema organizado.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/letters" className="btn btn-primary">
                Explorar Letras
              </Link>
              <Link to="/vocabulary" className="btn btn-secondary">
                Ver Vocabulário
              </Link>
              <Link to="/flashcards" className="btn btn-accent">
                Criar Flashcards
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;