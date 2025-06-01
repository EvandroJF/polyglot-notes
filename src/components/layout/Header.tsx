import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Languages, Menu, X, BookOpen } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 font-medium transition-colors duration-200 rounded-md ${
      isActive 
        ? 'text-primary-500 bg-primary-50' 
        : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-100'
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-primary-500 font-bold text-xl">
          <BookOpen size={28} strokeWidth={2} />
          <span>Polyglot Notes</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClass} end>
            Início
          </NavLink>
          <NavLink to="/letters" className={navLinkClass}>
            Letras
          </NavLink>
          <NavLink to="/vocabulary" className={navLinkClass}>
            Vocabulário
          </NavLink>
          <NavLink to="/flashcards" className={navLinkClass}>
            Cartões
          </NavLink>
          <NavLink to="/practice" className={navLinkClass}>
            Praticar
          </NavLink>
        </nav>

        {/* Language Selector */}
        <div className="hidden md:flex items-center">
          <button 
            className="flex items-center gap-1 px-3 py-2 text-neutral-700 hover:text-primary-500 transition-colors"
            aria-label="Selecionar idioma"
          >
            <Languages size={20} />
            <span className="font-medium">PT</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-700 hover:text-primary-500 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 border-t border-neutral-200 shadow-lg slide-up">
          <div className="flex flex-col space-y-2">
            <NavLink to="/" className={navLinkClass} onClick={closeMenu} end>
              Início
            </NavLink>
            <NavLink to="/letters" className={navLinkClass} onClick={closeMenu}>
              Letras
            </NavLink>
            <NavLink to="/vocabulary" className={navLinkClass} onClick={closeMenu}>
              Vocabulário
            </NavLink>
            <NavLink to="/flashcards" className={navLinkClass} onClick={closeMenu}>
              Cartões
            </NavLink>
            <NavLink to="/practice" className={navLinkClass} onClick={closeMenu}>
              Praticar
            </NavLink>
            
            <div className="pt-2 border-t border-neutral-200 mt-2">
              <button className="flex w-full items-center gap-2 px-4 py-2 text-neutral-700 hover:text-primary-500 transition-colors">
                <Languages size={20} />
                <span>Mudar Idioma</span>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;