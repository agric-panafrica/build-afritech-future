import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, type Variants } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';
import cityscapeImage from '@/assets/african-cityscape.jpg';
import workspaceImage from '@/assets/innovation-space.jpg';

const About = () => {
  useSEO({
    title: 'About - Afritech Capital Ghana',
    description: 'Accra-based advisory firm helping African tech founders prepare for investor scrutiny with stronger strategy, cleaner numbers, and sharper fundraising materials.',
    image: '/opengraphImage.png',
  });
  const values = [
    { number: '01', icon: <Target className="h-6 w-6 text-primary" />, title: 'Evidence', description: 'We turn assumptions into numbers, milestones, and investor-ready proof.' },
    { number: '02', icon: <Award className="h-6 w-6 text-brand-ink dark:text-brand-yellow" />, title: 'Discipline', description: 'We keep the model, deck, and fundraising plan aligned.' },
    { number: '03', icon: <Eye className="h-6 w-6 text-brand-red" />, title: 'Clarity', description: 'We help founders answer hard investor questions without losing the story.' },
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
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-muted/10 py-20 border-b border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="section-kicker">About Afritech</p>
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Built for founders raising serious capital.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Afritech Capital Ghana is an Accra-based advisory firm for African tech founders preparing for seed, pre-series, and growth conversations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-24">

            {/* Text + Image Grid */}
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Operating Context, Investor Process</h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Founders come to us when the product works but the raise still feels loose. We pressure-test the business model, clean up financial projections, and shape the investor story around proof.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Our work sits between the African operating context and the investor diligence process. That means we ask practical questions about customers, regulation, margins, governance, and the path to scale.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20, filter: 'blur(3px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative overflow-hidden rounded-lg border border-border/40 shadow-premium"
              >
                <img
                  src={cityscapeImage}
                  alt="Accra skyline at sunset"
                  className="w-full h-auto object-cover transition-transform"
                  style={{ transitionDuration: '8000ms' }}
                />
              </motion.div>
            </div>

            {/* Mission & Vision Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-lg border border-primary/10 bg-primary/[0.02] dark:bg-primary/[0.04]"
              >
                <span className="text-[10px] font-bold uppercase text-primary">Core Purpose</span>
                <h3 className="text-2xl font-extrabold mt-2 mb-4 text-foreground">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Help African founders prepare for investor scrutiny with stronger strategy, cleaner numbers, and sharper fundraising materials.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="p-8 rounded-lg border border-accent/10 bg-accent/[0.02] dark:bg-accent/[0.04]"
              >
                <span className="text-[10px] font-bold uppercase text-brand-ink dark:text-brand-yellow">Strategic Aim</span>
                <h3 className="text-2xl font-extrabold mt-2 mb-4 text-foreground">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  More African startups closing the right capital on terms they understand.
                </p>
              </motion.div>
            </div>

            {/* Innovation Space Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden rounded-lg border border-border/40 shadow-premium">
                <img
                  src={workspaceImage}
                  alt="Founders working together in a modern workspace"
                  className="w-full h-auto object-cover transition-transform"
                  style={{ transitionDuration: '8000ms' }}
                />
              </div>
              <p className="text-center text-xs font-medium text-muted-foreground">
                Founder work needs room for the numbers, the story, and the uncomfortable questions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/20 py-24 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="section-kicker">How we work</p>
            <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl text-foreground">Useful advice beats polished noise.</h2>
            <p className="text-lg text-muted-foreground">
              We focus on the parts of a raise that investors test first.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemFadeUp}
                className="flex flex-col justify-between p-8 rounded-lg bg-background border border-border/45 shadow-premium-sm relative overflow-hidden group"
              >
                <div className="absolute top-4 right-6 text-5xl font-extrabold text-muted/20 select-none group-hover:text-accent/15 transition-colors">
                  {value.number}
                </div>
                <div className="space-y-4">
                  <div className="p-2.5 rounded-lg bg-muted/30 w-fit">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
