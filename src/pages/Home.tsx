import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BarChart3, FileText, Handshake, TrendingUp, Sprout, Heart, Cpu, Zap } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const readinessServices = [
    { icon: <BarChart3 className="h-4 w-4 text-accent" />, label: 'Clean numbers' },
    { icon: <FileText className="h-4 w-4 text-accent" />, label: 'Investor materials' },
    { icon: <Handshake className="h-4 w-4 text-accent" />, label: 'Fundraising prep' },
  ];

  const sectors = [
    {
      icon: <TrendingUp className="h-7 w-7 text-primary" />,
      name: 'Fintech',
      description: 'Payments, credit, compliance, and unit economics.',
      bgClass: 'bg-primary/[0.03] dark:bg-primary/[0.06] border-primary/20 hover:border-primary/50 md:col-span-3'
    },
    {
      icon: <Sprout className="h-7 w-7 text-brand-ink dark:text-brand-yellow" />,
      name: 'AgriTech',
      description: 'Farmer adoption, margins, logistics, and seasonality.',
      bgClass: 'bg-brand-yellow/[0.05] border-brand-yellow/45 hover:border-brand-yellow md:col-span-3'
    },
    {
      icon: <Heart className="h-7 w-7 text-brand-red" />,
      name: 'HealthTech',
      description: 'Clinical trust, data privacy, and payer logic.',
      bgClass: 'bg-brand-red/[0.03] border-brand-red/25 hover:border-brand-red/60 md:col-span-2'
    },
    {
      icon: <Cpu className="h-7 w-7 text-primary" />,
      name: 'AI & Data',
      description: 'Practical use cases, data quality, and customer proof.',
      bgClass: 'bg-primary/[0.03] dark:bg-primary/[0.06] border-primary/20 hover:border-primary/50 md:col-span-2'
    },
    {
      icon: <Zap className="h-7 w-7 text-brand-ink dark:text-brand-yellow" />,
      name: 'Green Energy',
      description: 'Project economics, adoption, and infrastructure risk.',
      bgClass: 'bg-brand-yellow/[0.05] border-brand-yellow/45 hover:border-brand-yellow md:col-span-2'
    },
  ];

  const readinessMarkers = ['Clean model', 'Use of funds', 'Diligence answers', 'Investor list'];

  // Animation variants
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 15, filter: 'blur(3px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: 'spring', duration: 0.5, bounce: 0 } }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85svh] flex items-center overflow-hidden text-primary-foreground">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.02] transition-transform"
          style={{ transitionDuration: '10000ms' }}
        />
        <div className="absolute inset-0 bg-brand-ink/75" />
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-36">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl text-center"
          >
            <motion.h1 variants={itemFadeUp} className="text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
              Afritech Capital Ghana
            </motion.h1>
            <motion.p variants={itemFadeUp} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
              We help African tech founders prepare the strategy, financial model, and pitch materials investors expect before a serious raise.
            </motion.p>

            <motion.div variants={itemFadeUp} className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/programs">
                <Button size="lg" className="w-full bg-primary text-white shadow-premium duration-300 hover:bg-primary/95 active:scale-95 sm:w-auto">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-white/50 bg-white/10 text-white shadow-premium-sm transition-smooth hover:border-white/85 hover:bg-white/20 hover:text-white focus-visible:text-white focus-visible:ring-white/60 active:scale-95 active:text-white sm:w-auto"
                >
                  Schedule a Consultation
                </Button>
              </Link>
            </motion.div>

            <motion.ul variants={itemFadeUp} className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 border-t border-white/25 pt-6 text-sm text-white/85 sm:grid-cols-3" aria-label="Core advisory services">
              {readinessServices.map((service) => (
                <li key={service.label} className="flex items-center justify-center gap-3">
                  <span aria-hidden="true" className="p-1.5 rounded-md bg-white/10 border border-white/20">
                    {service.icon}
                  </span>
                  <span className="font-medium text-white/90">{service.label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      {/* Readiness Markers */}
      <section className="py-10 border-b border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-5 text-center text-xs font-bold uppercase text-muted-foreground">
            Capital readiness markers
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
            {readinessMarkers.map((marker) => (
              <div key={marker} className="rounded-lg border border-border/60 bg-background px-4 py-3 text-center text-sm font-semibold text-foreground shadow-premium-sm">
                {marker}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-kicker">What we fix</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl text-foreground">
                Your raise needs more than a deck.
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg leading-relaxed text-muted-foreground"
            >
              Investors look for a business that can survive questions on market, margins, risk, and governance. We help founders align the story with the model, the model with the operating plan, and the operating plan with the ask.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Focus Sectors (Bento Grid) */}
      <section className="py-24 bg-muted/20 border-y border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <p className="section-kicker">Where we work</p>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-foreground">
              Sectors where proof matters early.
            </h2>
            <p className="text-lg text-muted-foreground">
              Each sector has a different diligence burden. We help founders show the evidence investors will test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                className={`flex flex-col justify-between overflow-hidden rounded-lg border p-7 shadow-premium-sm transition-all duration-300 ${sector.bgClass}`}
              >
                <div className="space-y-4">
                  <div className="p-2 rounded-lg bg-background w-fit border shadow-premium-sm">
                    {sector.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{sector.name}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{sector.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-24 text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">Bring the messy version.</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto text-white/90 leading-relaxed">
            Send the deck, model, or fundraising question. We will help you find the gaps before investors do.
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

export default Home;
