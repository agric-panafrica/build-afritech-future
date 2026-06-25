import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { toast } from 'sonner';
import { motion, type Variants } from 'framer-motion';
import { useSEO } from '@/hooks/useSEO';

const Contact = () => {
  useSEO({
    title: 'Contact - Afritech Capital Ghana',
    description: 'Schedule a private consultation with Afritech Capital Ghana. Submit your pitch materials or fundraising questions for feedback.',
    image: '/opengraphImage.png',
  });

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzRnvvf4C_8E-uUVXFQv8eZ3TkLLXzucUyxKUQuwY3tE9Dwrcb6DEOvtTw_W-YfJbFB/exec';
  const linkedInUrl = 'https://www.linkedin.com/in/samuel-baah-9a8500192?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          category: formData.category,
          message: formData.message,
          timestamp: new Date().toISOString(),
        }),
      });

      toast.success('Message sent. We will reply within 24-48 hours.');
      setFormData({ name: '', email: '', category: '', message: '' });
    } catch (error) {
      toast.error('The form did not send. Email afritechcapitalghana@gmail.com.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <p className="section-kicker">Contact</p>
            <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Talk to us before you pitch.
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Send the deck, model, or fundraising question. We will respond with a practical next step.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Contact Form */}
            <motion.div variants={itemFadeUp} className="lg:col-span-2">
              <Card className="border border-primary/10 bg-primary/[0.01] dark:bg-primary/[0.02] shadow-premium rounded-lg p-2">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-extrabold">Start the conversation</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Share where you are in the raise and what needs attention.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-semibold text-foreground/90">Name</Label>
                      <Input
                        id="name"
                        placeholder="Full name"
                        className="h-11 bg-background border-border/60 placeholder:text-muted-foreground/80 focus-visible:ring-primary focus-visible:ring-1 focus-visible:border-primary text-foreground text-sm font-medium rounded-lg transition-all duration-200"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-foreground/90">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@company.com"
                        className="h-11 bg-background border-border/60 placeholder:text-muted-foreground/80 focus-visible:ring-primary focus-visible:ring-1 focus-visible:border-primary text-foreground text-sm font-medium rounded-lg transition-all duration-200"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-semibold text-foreground/90">I am a</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                        required
                      >
                        <SelectTrigger id="category" className="h-11 bg-background border-border/60 text-foreground text-sm font-medium rounded-lg transition-all duration-200 focus:ring-primary focus:ring-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="rounded-lg border border-border/40">
                          <SelectItem value="founder">Founder</SelectItem>
                          <SelectItem value="investor">Investor</SelectItem>
                          <SelectItem value="partner">Partner</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-foreground/90">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what you are raising, what materials you have, and where you need help."
                        rows={6}
                        className="bg-background border-border/60 placeholder:text-muted-foreground/80 focus-visible:ring-primary focus-visible:ring-1 focus-visible:border-primary text-foreground text-sm font-medium rounded-lg p-3 transition-all duration-200"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-premium rounded-lg transition-smooth active:scale-95" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div variants={itemFadeUp}>
                <Card className="border border-accent/10 bg-accent/[0.01] dark:bg-accent/[0.02] shadow-premium-sm rounded-lg p-6 space-y-5">
                  <h3 className="text-xl font-extrabold">Contact details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="p-2 bg-background border rounded-lg shadow-premium-sm text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Email</p>
                        <a href="mailto:afritechcapitalghana@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          afritechcapitalghana@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="p-2 bg-background border rounded-lg shadow-premium-sm text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">
                          Accra, Ghana
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3.5">
                      <div className="p-2 bg-background border rounded-lg shadow-premium-sm text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Phone</p>
                        <a href="tel:+233243503268" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                          +233-24-350-3268
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={itemFadeUp}>
                <Card className="border border-brand-red/15 bg-brand-red/[0.02] shadow-premium-sm rounded-lg p-6 space-y-5">
                  <h3 className="text-xl font-extrabold">Follow Us</h3>
                  <div className="flex space-x-3.5">
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-background border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-premium-sm active:scale-90" aria-label="LinkedIn">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-premium-sm active:scale-90" aria-label="Twitter">
                      <FaTwitter className="h-5 w-5" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-background border rounded-lg hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-premium-sm active:scale-90" aria-label="YouTube">
                      <FaYoutube className="h-5 w-5" />
                    </a>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
