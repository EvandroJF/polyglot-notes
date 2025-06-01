import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <BookOpen size={24} />
              <span>Polyglot Notes</span>
            </Link>
            <p className="text-neutral-300 text-sm">
              Aprenda idiomas de forma simples e organizada. 
              Estude coreano e inglês com nossa abordagem prática 
              e eficiente.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-neutral-300">
              <li><Link to="/" className="hover:text-primary-300 transition-colors">Início</Link></li>
              <li><Link to="/letters" className="hover:text-primary-300 transition-colors">Letras e Fonemas</Link></li>
              <li><Link to="/vocabulary" className="hover:text-primary-300 transition-colors">Vocabulário</Link></li>
              <li><Link to="/flashcards" className="hover:text-primary-300 transition-colors">Cartões de Memorização</Link></li>
              <li><Link to="/practice" className="hover:text-primary-300 transition-colors">Modo de Prática</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Idiomas</h3>
            <div className="flex flex-col space-y-2 text-neutral-300">
              <button className="text-left hover:text-primary-300 transition-colors">
                Português (Brasil)
              </button>
              <button className="text-left hover:text-primary-300 transition-colors">
                한국어 (Coreano)
              </button>
              <button className="text-left hover:text-primary-300 transition-colors">
                English (Inglês)
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Polyglot Notes. Todos os direitos reservados.
          </p>
          <p className="text-neutral-400 text-sm flex items-center mt-4 md:mt-0">
            Feito com <Heart size={16} className="mx-1 text-accent-300" /> para amantes de idiomas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;