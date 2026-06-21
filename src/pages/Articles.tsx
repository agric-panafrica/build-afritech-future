import { CalendarDays, Copy, Share2, UserRound, X } from 'lucide-react';
import { toast } from 'sonner';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion, type Variants } from 'framer-motion';

type Article = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  bgClass: string;
  content: string;
};

const articles: Article[] = [
  {
    id: '1',
    title: 'Investor Readiness Is Not What African Founders Think It Is',
    excerpt:
      'A polished deck does not make a founder investor-ready. Investors look for operating discipline before they study design.',
    author: 'Samuel K. Baah, CEO',
    date: 'January 26, 2026',
    readTime: '5 min read',
    category: 'Investment',
    bgClass: 'bg-primary/[0.02] dark:bg-primary/[0.04] border-primary/15 hover:border-primary/45',
    content: `Many founders treat investor readiness as the week before outreach: polish the pitch deck, tighten the demo, and prepare answers for common questions. Investors read readiness through the way the company operates.

Investors listen for ambition, then test whether the company can make risk visible and manageable. That means clean financial records, credible assumptions, clear ownership, customer evidence, and a founder who can explain what works without hiding what does not.

Founders make stronger fundraising materials when the business already has operating discipline. A deck can describe traction, but diligence will ask what sits under it: retention, margin, sales cycle, collection risk, regulatory exposure, and the cost of growth. If those answers are missing inside the business, design will not carry the raise.

Sector diligence changes the questions. In fintech, transaction volume means little without licensing clarity, fraud controls, and unit economics. In agritech, a good pilot has to translate into repeat farmer adoption, logistics discipline, and seasonal margin visibility. In healthtech, user growth has to sit beside clinical trust, data privacy, and a clear payer logic.

Investor readiness is the work of making the business legible. Founders who do that early raise from a stronger position because they are not asking investors to believe a story. They are showing how the company already behaves when nobody is pitching.`,
  },
  {
    id: '2',
    title: 'Ghana Startup Ecosystem: Promise vs Reality',
    excerpt:
      'Ghana has talent, stability, and regional access. Founders still need better capital, stronger governance, and sharper plans for scale.',
    author: 'Research Team',
    date: 'March 24, 2026',
    readTime: '5 min read',
    category: 'Market Notes',
    bgClass: 'bg-brand-red/[0.02] border-brand-red/20 hover:border-brand-red/55',
    content: `Ghana has real advantages as a startup market. It offers political stability, a strong talent base, improving digital adoption, and access to the wider West African region. Accra has also built a visible community of founders, operators, hubs, and advisors.

Ghana's strengths do not remove the constraints. Early-stage capital is still thin. Local institutional investors remain cautious. Many founders depend on grants, accelerators, personal savings, or foreign capital that may not understand local operating conditions.

Scale is another constraint. Ghana can be an excellent launch market, but many venture-backed companies need regional expansion to support the size of outcome investors expect. That expansion brings new regulatory regimes, new customer behavior, logistics friction, currency exposure, and management strain.

The next stage of the ecosystem will require more than enthusiasm. Founders need stronger financial discipline and governance earlier. Capital providers need better ways to evaluate local risk. Policy actors need to reduce friction without creating dependency. Support organizations need to teach the work after ideation: pricing, sales, compliance, hiring, reporting, and cash planning.

Ghana's startup ecosystem has serious advantages and serious constraints. The founders who win will treat both as part of the strategy, not a footnote to the pitch.`,
  },
  {
    id: '3',
    title: 'From Survival to Strategy: Rewiring the African Entrepreneurial Mindset',
    excerpt:
      'For decades, necessity and urgency shaped African entrepreneurship. Building sustainable prosperity requires shifting from a survival mindset to long-term strategic systems.',
    author: 'Research Team',
    date: 'June 21, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    bgClass: 'bg-brand-yellow/[0.02] dark:bg-brand-yellow/[0.04] border-brand-yellow/20 hover:border-brand-yellow/55',
    content: `For decades, African entrepreneurship has been shaped by necessity. Across the continent, businesses have emerged not always from ideal conditions or carefully structured ecosystems, but from urgency. People built enterprises because formal employment systems could not absorb growing populations, since economic instability demanded improvisation, and survival itself often required innovation. In this environment, entrepreneurship became more than an economic activity; it became a mechanism of resilience.

Yet resilience, while admirable, is not enough to build sustainable prosperity.

Africa now stands at a defining economic and psychological crossroads. The continent is experiencing one of the most significant demographic and technological transformations in modern history. Cities are expanding rapidly, digital infrastructure is accelerating, mobile connectivity is reshaping commerce, and a new generation of founders is emerging with unprecedented ambition. However, beneath this momentum lies a deeper challenge that receives far less attention: many African entrepreneurs are still operating from a survival mindset in an era that increasingly demands strategic thinking.

The psychology of survival is deeply embedded within many African business environments. When individuals grow within unstable economic systems, uncertainty naturally shapes their decision-making. Entrepreneurs become conditioned to prioritize immediate cash flow over long-term planning because tomorrow itself feels unpredictable. They focus on urgent operational problems because the surrounding environment constantly demands adaptation. In such contexts, short-term thinking is not irrational; it is survival behavior.

This explains why many businesses across the continent remain heavily dependent on the founder’s direct involvement. The entrepreneur becomes the marketer, strategist, accountant, operations manager, and salesperson simultaneously. Systems are rarely documented because there is no time to document them. Delegation becomes difficult because trust is fragile. Strategic planning is postponed because immediate pressure consumes attention. The business survives through intensity rather than structure.

However, survival-based entrepreneurship has limitations. A company built entirely around urgency often struggles to scale sustainably. Many businesses generate revenue for years yet remain fragile because they are structurally dependent on the founder’s personal energy. Once that energy weakens, the organization itself begins to collapse. This is one of the silent crises within African entrepreneurship: too many businesses survive, but too few institutionalize.

Globally, the most transformative companies were not built solely through hustle. They were built through systems, long-term thinking, operational discipline, and strategic patience. The difference between temporary success and enduring influence often lies not in talent, but in architecture. A founder may possess extraordinary creativity, but without systems, governance, and long-term strategic direction, that creativity rarely compounds into lasting economic power.

Africa’s entrepreneurial future therefore requires a profound mental transition. Entrepreneurs must stop viewing their businesses merely as vehicles for income generation and begin viewing them as institutions capable of creating long-term value. This shift changes the entire orientation of decision-making.

This transformation begins with understanding the difference between activity and strategy. Across social media and popular culture, hustle has been romanticized. Exhaustion is often presented as proof of ambition. Entrepreneurs are celebrated for sleepless nights, relentless multitasking, and constant pressure. While hard work is undeniably necessary, hustle alone cannot industrialize a continent. Endless activity without strategic direction eventually leads to burnout rather than sustainability.

The entrepreneurs who will define Africa’s future are not necessarily those who move the fastest, but those who build the strongest foundations. Strategic thinking requires the ability to delay gratification, invest in systems before they produce visible returns, and make decisions that prioritize long-term positioning over immediate appearances. This is often difficult within environments where economic pressure is intense, yet it remains essential.

Consider the difference between a founder who spends every available resource projecting success and one who quietly invests in infrastructure, operational efficiency, staff development, and technology. The first may appear successful in the short term, but the second is often building the conditions for longevity. Sustainable growth rarely emerges from performance alone; it emerges from disciplined architecture.

One of the most important mindset shifts African entrepreneurs must embrace is the transition from income thinking to asset thinking. Many businesses operate primarily around daily revenue generation without intentionally building assets that compound over time. Yet enduring companies create value beyond immediate transactions. They build intellectual property, brand equity, distribution systems, customer trust, data ecosystems, and operational frameworks that continue generating returns long after the initial effort.

This distinction is critical for Africa’s economic future. A continent rich in raw creativity but weak in ownership structures risks remaining dependent on external systems. African entrepreneurs must increasingly focus not only on participation in markets, but on control of value chains. The future belongs to founders who understand how to move from extraction to ownership, from transactions to ecosystems, and from temporary income to scalable value creation.

Equally important is the transition from individualism to collective intelligence. Many entrepreneurs struggle to delegate because they associate leadership with personal control. Yet no enduring institution is built entirely around one individual. Sustainable organizations require teams, governance structures, leadership development, and operational continuity. Founders who attempt to control every aspect of their businesses eventually limit their own growth.

This is particularly relevant within African startup ecosystems, where entrepreneurs often carry immense pressure to succeed quickly. The desire to maintain control sometimes prevents the development of strong organizational cultures. Yet strategic leadership is not defined by how much one person can do alone; it is defined by the ability to coordinate talent effectively toward a shared vision.

The emergence of technology across Africa has created extraordinary opportunities for entrepreneurs willing to think strategically. Digital infrastructure is allowing African businesses to leapfrog traditional limitations in finance, logistics, healthcare, education, and commerce. Startups across the continent are increasingly solving problems at scale using localized innovation models tailored to African realities.

However, technology alone is not enough. Many startups fail because they prioritize visibility over sustainability or imitate foreign business models without understanding local contexts. African entrepreneurship must become globally informed yet deeply rooted in local realities. The continent’s complexities require innovation that understands informal economies, infrastructure gaps, demographic trends, and cultural nuance.

True strategic thinking also demands financial intelligence. Many businesses generate substantial revenue while lacking the systems necessary for long-term financial sustainability. Cash flow management, budgeting discipline, capital allocation, investment strategy, and governance are often underdeveloped. Yet sustainable growth requires more than revenue generation; it requires understanding how resources are structured, protected, and deployed over time.

Some entrepreneurs mistake consumption for progress. Expensive appearances, premature expansion, or symbolic status markers may create temporary perception, but they can weaken long-term stability. The strongest businesses are often built through disciplined reinvestment rather than visible extravagance. Strategic entrepreneurs understand that sustainable growth is rooted in patience, not performance.

Perhaps most importantly, Africa must begin producing more institution-builders rather than merely successful individuals. Too many businesses disappear once the founder exits because systems were never properly institutionalized. Documentation is absent. Succession planning is ignored. Governance structures remain informal. The organization becomes inseparable from the founder’s personality.

Yet the societies that achieve long-term economic transformation are those capable of building institutions that outlive individuals. Africa’s future prosperity depends not only on entrepreneurial energy, but on the ability to convert that energy into enduring organizational systems. The continent requires companies capable of surviving leadership transitions, adapting across generations, and compounding influence over decades.

This is ultimately why the shift from survival to strategy matters so profoundly. It is not simply a business conversation; it is a developmental conversation. The mindset of entrepreneurs shapes the structure of economies. If businesses remain trapped in cycles of improvisation and short-termism, broader economic transformation becomes difficult. But when entrepreneurs begin building with strategic clarity, institutional discipline, and long-term vision, they create foundations capable of reshaping industries and societies.

Africa already possesses the creativity, resilience, and youthful energy necessary for transformation. What it now requires is deeper strategic maturity. The next generation of African entrepreneurs must learn to think beyond urgency and begin designing systems capable of sustaining prosperity over time.

The future of African enterprise will not belong merely to those who survive difficult conditions. It will belong to those who can transform resilience into structure, vision into institutions, and ambition into sustainable growth.`,
  },
];

const copyArticleLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  } catch {
    toast.error('Could not copy link. Please copy it from the address bar.');
  }
};

const shareArticle = async (article: Article) => {
  if (!navigator.share) {
    await copyArticleLink();
    return;
  }

  try {
    await navigator.share({
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    });
  } catch (error) {
    if (error instanceof DOMException && error.name === 'AbortError') {
      return;
    }

    await copyArticleLink();
  }
};

const Articles = () => {
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
    <div className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 15, filter: 'blur(3px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="section-kicker">Research</p>
          <h1 className="mb-5 text-4xl font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            Notes on capital, founders, and market proof.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Short analysis for founders preparing to raise and investors studying African tech companies.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {articles.map((article) => (
            <Dialog key={article.id}>
              <DialogTrigger asChild>
                <motion.button 
                  type="button" 
                  variants={itemFadeUp}
                  whileHover={{ y: -5, transition: { type: 'spring', stiffness: 350, damping: 25 } }}
                  className="h-full text-left"
                >
                  <Card className={`group flex h-full cursor-pointer flex-col overflow-hidden border p-7 shadow-premium-sm transition-all duration-300 ${article.bgClass}`}>
                    <CardContent className="flex h-full flex-col p-0">
                      <div className="flex-1">
                        <div className="mb-4 flex flex-wrap items-center gap-3">
                          <Badge variant="secondary" className="px-2.5 py-0.5 text-xs font-semibold">
                            {article.category}
                          </Badge>
                          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <CalendarDays className="h-3.5 w-3.5" />
                            {article.date}
                          </span>
                        </div>
                        <h2 className="mb-3 text-2xl font-extrabold leading-tight text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h2>
                        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                          {article.excerpt}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/40 pt-5">
                        <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
                          <UserRound className="h-4 w-4 text-primary" />
                          {article.author}
                        </div>
                        <span className="text-xs font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          Read Note
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>
              </DialogTrigger>

              <DialogContent className="flex h-[85vh] max-w-4xl flex-col overflow-hidden border border-border/40 bg-background/95 backdrop-blur-md p-0 shadow-2xl sm:rounded-lg [&>button]:hidden">
                <div className="relative flex h-full flex-col overflow-hidden">
                  <DialogClose className="absolute right-6 top-6 z-50 rounded-full border border-border/40 bg-background/80 p-2.5 backdrop-blur-md transition-colors hover:bg-muted active:scale-95">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </DialogClose>

                  <div className="min-h-0 flex-1 overflow-y-auto scroll-smooth">
                    <article className="mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-20">
                      <header className="mb-8 space-y-4">
                        <Badge variant="outline" className="mb-2 font-semibold">
                          {article.category}
                        </Badge>
                        <DialogTitle className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">
                          {article.title}
                        </DialogTitle>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                          <span>{article.date}</span>
                          <span aria-hidden="true" className="text-muted-foreground/40">&bull;</span>
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2.5 pt-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
                            <UserRound className="h-4 w-4 text-primary" />
                          </div>
                          <span className="font-bold text-sm text-foreground/80">{article.author}</span>
                        </div>
                      </header>

                      <div className="prose prose-base max-w-none pb-8 dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed prose-p:text-muted-foreground/90 space-y-6">
                        {article.content.split('\n\n').map((paragraph) => (
                          <p key={paragraph.slice(0, 32)} className="text-base text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <footer className="mt-12 flex flex-wrap items-center gap-3 border-t border-border/40 pt-8 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm" className="gap-2 rounded-lg hover:bg-muted/50" onClick={copyArticleLink}>
                          <Copy className="h-4 w-4" />
                          Copy Link
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 rounded-lg hover:bg-muted/50" onClick={() => shareArticle(article)}>
                          <Share2 className="h-4 w-4" />
                          Share Article
                        </Button>
                      </footer>
                    </article>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Articles;
