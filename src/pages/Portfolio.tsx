import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Sprout, Heart } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';

const Portfolio = () => {
  useSEO({
    title: 'Portfolio - Afritech Capital Ghana',
    description: 'Explore the African tech startups and founders Afritech Capital Ghana has prepared for successful fundraises and investor diligence.',
    image: '/opengraphImage.png',
  });

  const startups = [
    {
      name: 'PayLink',
      sector: 'Fintech',
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      description: 'We rebuilt the revenue model, clarified unit economics, and shaped the Series A deck around payment volume, margin, and regulatory risk.',
      stage: 'Raised Series A',
      bgClass: 'bg-primary/[0.02] dark:bg-primary/[0.04] border-primary/15 hover:border-primary/40',
    },
    {
      name: 'AgroNova',
      sector: 'AgriTech',
      icon: <Sprout className="h-6 w-6 text-brand-ink dark:text-brand-yellow" />,
      description: 'We narrowed the investor target list, sharpened the market position, and tied the seed ask to farmer retention and logistics milestones.',
      stage: 'Raised Seed',
      bgClass: 'bg-brand-yellow/[0.05] border-brand-yellow/35 hover:border-brand-yellow',
    },
    {
      name: 'MediServe',
      sector: 'HealthTech',
      icon: <Heart className="h-6 w-6 text-brand-red" />,
      description: 'We built the pre-seed model and deck around patient access, institutional partners, privacy controls, and payer logic.',
      stage: 'Raised Pre-Seed',
      bgClass: 'bg-brand-red/[0.02] border-brand-red/20 hover:border-brand-red/55',
    },
  ];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 0.5, bounce: 0 } }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-muted/10 py-20 border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="section-kicker">Selected work</p>
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Fundraising materials built around proof.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              A few examples of how we turn operating detail into investor-ready materials.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                className={`flex flex-col justify-between overflow-hidden rounded-lg border p-7 shadow-premium-sm transition-all duration-300 ${startup.bgClass}`}
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-background border shadow-premium-sm">
                      {startup.icon}
                    </div>
                    <Badge variant="secondary" className="font-semibold px-2.5 py-1 text-xs">
                      {startup.stage}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-extrabold text-foreground">{startup.name}</h3>
                    <span className="inline-block text-xs font-bold uppercase text-primary">
                      {startup.sector}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{startup.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Preparing a raise?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-white/90 leading-relaxed">
            Bring the current deck, model, or investor list. We will show you what needs work.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/95 shadow-premium transition-smooth active:scale-95">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
