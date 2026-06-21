import { Target, TrendingUp, FileText, Users } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const Programs = () => {
  const programs = [
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: 'Investor Strategy',
      description: 'Shape the raise around the market, customer proof, use of funds, and the milestones investors can underwrite.',
      features: ['Market sizing', 'Competitive position', 'Use of funds', 'Milestone plan'],
      bgClass: 'bg-primary/[0.02] dark:bg-primary/[0.04] border-primary/15 hover:border-primary/45',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-ink dark:text-brand-yellow" />,
      title: 'Financial Modeling',
      description: 'Build projections that connect revenue, costs, hiring, runway, and valuation assumptions in one usable model.',
      features: ['Revenue logic', 'Cost structure', 'Scenario planning', 'Runway analysis'],
      bgClass: 'bg-brand-yellow/[0.05] border-brand-yellow/45 hover:border-brand-yellow',
    },
    {
      icon: <FileText className="h-6 w-6 text-brand-red" />,
      title: 'Pitch Materials',
      description: 'Turn the business case into a deck, memo, and supporting notes founders can defend in meetings.',
      features: ['Deck structure', 'Narrative edits', 'Metrics pages', 'Data room checklist'],
      bgClass: 'bg-brand-red/[0.02] border-brand-red/20 hover:border-brand-red/55',
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Fundraising Support',
      description: 'Prepare outreach, investor conversations, diligence responses, and term sheet questions before pressure arrives.',
      features: ['Investor list', 'Pitch coaching', 'Diligence prep', 'Term sheet review'],
      bgClass: 'bg-primary/[0.02] dark:bg-primary/[0.04] border-primary/15 hover:border-primary/45',
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
            <p className="section-kicker">Services</p>
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Fundraising prep that survives diligence.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              We work on the strategy, model, deck, and investor process before founders start serious conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid max-w-7xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4"
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                className={`flex flex-col justify-between overflow-hidden rounded-lg border p-7 shadow-premium-sm transition-all duration-300 ${program.bgClass}`}
              >
                <div className="space-y-5">
                  <div className="p-2.5 rounded-lg bg-background border shadow-premium-sm w-fit">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-extrabold text-foreground">{program.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{program.description}</p>
                </div>
                <div className="mt-6 pt-5 border-t border-border/40">
                  <ul className="space-y-2.5">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-accent" />
                        <span className="text-foreground/90 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-muted/10 py-24 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="section-kicker text-center">Approach</p>
            <h2 className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">
              We prepare founders for the questions investors ask first.
            </h2>
            <div className="space-y-6 text-muted-foreground text-base leading-relaxed">
              <p>
                A good product does not carry a weak raise. We review the business case, then connect the story to the numbers, use of funds, and next milestones.
              </p>
              <p>
                Founders leave with materials they can use in meetings, not a binder of theory. The work is practical: models, decks, investor lists, diligence answers, and sharper calls.
              </p>
              <p>
                We stay close from the first review through the closing questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
