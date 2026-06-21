import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

type NavigationProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const Navigation = ({ isOpen, onOpenChange }: NavigationProps) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/programs', label: 'Services' },
    { to: '/articles', label: 'Articles' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpenChange]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md shadow-premium-sm">
      <div className="brand-rule h-1" aria-hidden="true" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative overflow-hidden rounded-lg p-1 transition-all duration-300 group-hover:scale-105 active:scale-95">
              <img src="/favicon.png" alt="" className="h-8 w-8 object-contain" aria-hidden="true" />
            </div>
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-foreground transition-colors group-hover:text-primary sm:text-lg">AFRITECH</span>
              <span className="block text-[0.6rem] font-bold uppercase text-muted-foreground transition-colors group-hover:text-primary">
                Capital Ghana
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative py-1 px-1 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-smooth hover:bg-muted/50 active:scale-90"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full transition-smooth hover:bg-muted/50 active:scale-90"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(!isOpen)}
              className="rounded-full hover:bg-muted/50 active:scale-90"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Spring Physics */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-[4.25rem] bg-brand-ink/60 backdrop-blur-md md:hidden"
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => onOpenChange(false)}
              className="absolute inset-0 h-full w-full"
            />
            <motion.div
              initial={{ y: -12 }}
              animate={{ y: 0 }}
              exit={{ y: -12 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
              role="dialog"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-0 overflow-hidden border-b border-border/50 bg-background shadow-lg"
            >
              <div className="container mx-auto space-y-1 px-4 py-3 sm:px-6">
                {navLinks.map((link) => {
                  const active = isActive(link.to);
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => onOpenChange(false)}
                      className={`flex h-11 items-center justify-center rounded-md px-3 text-center text-sm font-semibold transition-smooth ${
                        active
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
